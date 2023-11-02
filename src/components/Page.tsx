import styled from 'styled-components';
import { H1 } from './Heading';
import StyledComponent from './types';

type PageType = StyledComponent<HTMLDivElement> & {
  Header: StyledComponent<StyledComponent<HTMLHeadingElement>>;
  Content: StyledComponent<HTMLDivElement>;
};

const Page: PageType = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.7)
  );
`;

const PageHeader: StyledComponent<StyledComponent<HTMLHeadingElement>> = styled(
  H1,
)`
  padding-left: 36px;
  padding-right: 36px;
  background-color: forestgreen;
`;

const PageContent = styled.div`
  padding: 12px 36px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 36px;
`;

Page.Header = PageHeader;
Page.Content = PageContent;

export default Page;
