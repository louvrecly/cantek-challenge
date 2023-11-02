import { useCallback, useContext } from 'react';
import Section from './Section';
import { H2 } from './Heading';
import Table from './Table';
import { TeamContext } from '../contexts/team';
import Button from './Button';

const TeamList: React.FC = () => {
  const { members, setMembers } = useContext(TeamContext);

  const removeMember = useCallback(
    (memberId: number) =>
      setMembers((members) =>
        members.filter((member) => member.id !== memberId),
      ),
    [setMembers],
  );

  return (
    <Section>
      <H2>🚩 Team List</H2>

      <Table>
        <Table.Row>
          <Table.Header>ID</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Role</Table.Header>
          <Table.Header>Remove</Table.Header>
        </Table.Row>

        {members.map((member) => (
          <Table.Row key={member.id}>
            <Table.Data>{member.id}</Table.Data>
            <Table.Data>{member.name}</Table.Data>
            <Table.Data>{member.role}</Table.Data>
            <Table.Data>
              <Button onClick={() => removeMember(member.id)}>&#x274c;</Button>
            </Table.Data>
          </Table.Row>
        ))}
      </Table>
    </Section>
  );
};

export default TeamList;
