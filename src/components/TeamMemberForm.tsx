import { Formik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import { TeamContext } from '../contexts/team';

const TeamMemberForm = () => {
  const { maxId, setMembers } = useContext(TeamContext);

  const onAddItem = (name: string, role: string) => {
    setMembers((members) => [...members, { name, role, id: maxId + 1 }]);
  };
  return (
    <>
      <div>
        <Formik
          initialValues={{ name: '', role: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required(),
            role: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            onAddItem(values.name, values.role);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label>Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name}
              <label>Role: </label>
              <input
                type="text"
                id="role"
                name="role"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.role}
              />
              {errors.role && touched.role}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default TeamMemberForm;
