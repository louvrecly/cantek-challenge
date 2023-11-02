import { Form, Formik, FormikConfig } from 'formik';
import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  padding: 12px 0;
`;

interface FormikFormProps extends FormikConfig<Record<string, unknown>> {
  children: ReactNode;
}

const FormikForm = ({ children, ...props }: FormikFormProps) => {
  return (
    <Formik {...props}>
      <StyledForm>{children}</StyledForm>
    </Formik>
  );
};

export default FormikForm;
