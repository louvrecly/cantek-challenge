import { Field } from 'formik';
import styled from 'styled-components';
import StyledComponent from './types';

type FormFieldType = StyledComponent<HTMLDivElement> & {
  Container: StyledComponent<HTMLDivElement>;
  Label: StyledComponent<HTMLLabelElement>;
  Input: StyledComponent<unknown>;
  Error: StyledComponent<HTMLDivElement>;
};

const FormField: FormFieldType = styled.div`
  position: relative;
  margin-bottom: 36px;
`;

const FormFieldContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  align-items: center;
`;

const FormFieldLabel = styled.label`
  font-weight: bold;
`;

const FormFieldInput = styled(Field)`
  padding: 6px 12px;
  min-width: 0;
  border: 1px solid forestgreen;
  border-radius: 6px;
`;

const FormFieldError = styled.div`
  position: absolute;
  inset: 100% 0 auto;
  font-size: 12px;
  color: crimson;
  text-align: end;
`;

FormField.Container = FormFieldContainer;
FormField.Label = FormFieldLabel;
FormField.Input = FormFieldInput;
FormField.Error = FormFieldError;

export default FormField;
