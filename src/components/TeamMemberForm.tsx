import { useContext } from 'react';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Section from './Section';
import { H2 } from './Heading';
import FormikForm from './FormikForm';
import FormField from './FormField';
import Button from './Button';
import { TeamContext } from '../contexts/team';
import { ALL_ROLES, MemberFormValues, Role } from '../types/member';

const initialValues: MemberFormValues = { name: '', role: 'Dev' };

const validationSchema = Yup.object<MemberFormValues>({
  name: Yup.string().required(),
  role: Yup.string().required(),
});

const TeamMemberForm = () => {
  const { maxId, setMembers } = useContext(TeamContext);

  const onAddItem = (name: string, role: Role) => {
    setMembers((members) => [...members, { name, role, id: maxId + 1 }]);
  };

  const onSubmit = (
    values: Record<string, unknown>,
    { setSubmitting }: FormikHelpers<Record<string, unknown>>,
  ) => {
    const { name, role } = values as MemberFormValues;
    onAddItem(name, role);
    setSubmitting(false);
  };

  return (
    <Section>
      <H2>📜 Member Form</H2>

      <FormikForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormField
          id="name"
          name="name"
          label="Name"
          placeholder="Enter Name"
        />

        <FormField id="role" name="role" label="Role" as="select">
          {ALL_ROLES.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </FormField>

        <Button type="submit" className="u-w-full">
          Save
        </Button>
      </FormikForm>
    </Section>
  );
};
export default TeamMemberForm;
