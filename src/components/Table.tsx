import styled from 'styled-components';
import StyledComponent from './types';

type TableType = StyledComponent<HTMLDivElement> & {
  Header: StyledComponent<HTMLDivElement>;
  Row: StyledComponent<HTMLDivElement>;
  Data: StyledComponent<HTMLDivElement>;
};

const TableHeader = styled.div`
  padding: 8px;
  text-align: left;
  background-color: forestgreen;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: stretch;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const TableData = styled.div`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid forestgreen;
  display: flex;
  align-items: center;
`;

const Table: TableType = styled.div``;

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Data = TableData;

export default Table;
