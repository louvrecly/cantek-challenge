import { ErrorMessage, Field, FieldAttributes } from 'formik';
import styled from 'styled-components';

type FormFieldProps = FieldAttributes<unknown> & {
  label: string;
};

const FieldContainer = styled.div`
  position: relative;
  margin-bottom: 36px;
`;

const FieldItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
`;

const FieldLabel = styled.label`
  font-weight: bold;
`;

const FieldInput = styled(Field)`
  padding: 6px 12px;
  min-width: 0;
  border: 1px solid forestgreen;
  border-radius: 6px;
`;

const Tooltip = styled.div`
  position: absolute;
  inset: 100% 0 auto;
  font-size: 12px;
  color: crimson;
  text-align: end;
`;

const FormField = ({ id, name, label, ...props }: FormFieldProps) => {
  return (
    <FieldContainer>
      <FieldItem>
        <FieldLabel htmlFor={id}>{label}:</FieldLabel>

        <FieldInput id={id} name={name} {...props} />
      </FieldItem>

      <ErrorMessage name={name}>
        {(message) => <Tooltip>{message}</Tooltip>}
      </ErrorMessage>
    </FieldContainer>
  );
};

export default FormField;
