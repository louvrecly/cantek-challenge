import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IStyledComponent } from 'styled-components';

type StyledComponent<T> = IStyledComponent<
  'web',
  DetailedHTMLProps<HTMLAttributes<T>, T>
>;

export default StyledComponent;
