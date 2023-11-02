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
  grid-template-columns: repeat(3, 1fr);
`;

const TableData = styled.div`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid forestgreen;
`;

const Table: TableType = styled.div``;

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Data = TableData;

export default Table;
