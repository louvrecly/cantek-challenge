import { DetailedHTMLProps, HTMLAttributes, LabelHTMLAttributes } from 'react';
import { IStyledComponent } from 'styled-components';

type Attributes<T> = HTMLAttributes<T> | LabelHTMLAttributes<T>;

type StyledComponent<T> = IStyledComponent<
  'web',
  DetailedHTMLProps<Attributes<T>, T>
>;

export default StyledComponent;
