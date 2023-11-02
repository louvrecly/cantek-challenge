import { TeamContext } from '../contexts/team';
import { useContext } from 'react';
import { styled } from 'styled-components';

const TableHeader = styled.div`
  padding: 8px;
  text-align: left;
  background-color: gray;
  color: white;
`;

const TableRow = styled.div`
  padding: 5px;
  display: grid;
`;

const TableData = styled.div`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TeamList: React.FC = () => {
  const { members } = useContext(TeamContext);
  return (
    <div>
      <h1>TeamList</h1>
      <div>
        <TableRow>
          <TableHeader>id</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableData>{member.id}</TableData>
            <TableData>{member.name}</TableData>
            <TableData>{member.role}</TableData>
          </TableRow>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
