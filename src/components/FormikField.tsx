import { ErrorMessage, FieldAttributes } from 'formik';
import FormField from './FormField';

type FormFieldProps = FieldAttributes<unknown> & {
  label: string;
};

const FormikField = ({ id, name, label, ...props }: FormFieldProps) => {
  return (
    <FormField>
      <FormField.Container>
        <FormField.Label htmlFor={id}>{label}:</FormField.Label>

        <FormField.Input id={id} name={name} {...props} />
      </FormField.Container>

      <ErrorMessage name={name}>
        {(message) => <FormField.Error>{message}</FormField.Error>}
      </ErrorMessage>
    </FormField>
  );
};

export default FormikField;
