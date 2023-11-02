import { useContext } from 'react';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Section from './Section';
import { H2 } from './Heading';
import FormikForm from './FormikForm';
import FormField from './FormField';
import Button from './Button';
import { TeamContext } from '../contexts/team';

type TeamMemberFormValues = {
  name: string;
  role: string;
};

const validationSchema = Yup.object<TeamMemberFormValues>({
  name: Yup.string().required(),
  role: Yup.string().required(),
});

const TeamMemberForm = () => {
  const { maxId, setMembers } = useContext(TeamContext);

  const onAddItem = (name: string, role: string) => {
    setMembers((members) => [...members, { name, role, id: maxId + 1 }]);
  };
  return (
    <Section>
      <H2>Member Form</H2>

      <FormikForm
        initialValues={{ name: '', role: '' }}
        validationSchema={validationSchema}
        onSubmit={(
          values: Record<string, unknown>,
          { setSubmitting }: FormikHelpers<Record<string, unknown>>,
        ) => {
          const { name, role } = values as TeamMemberFormValues;
          onAddItem(name, role);
          setSubmitting(false);
        }}
      >
        <FormField
          id="name"
          name="name"
          label="Name"
          placeholder="Enter Name"
        />

        <FormField
          id="role"
          name="role"
          label="Role"
          placeholder="Enter Role"
        />

        <Button type="submit" className="u-w-full">
          Save
        </Button>
      </FormikForm>
    </Section>
  );
};
export default TeamMemberForm;
