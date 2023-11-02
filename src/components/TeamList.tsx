import { useContext } from 'react';
import Section from './Section';
import { H2 } from './Heading';
import Table from './Table';
import { TeamContext } from '../contexts/team';

const TeamList: React.FC = () => {
  const { members } = useContext(TeamContext);

  return (
    <Section>
      <H2>🚩 Team List</H2>

      <Table>
        <Table.Row>
          <Table.Header>id</Table.Header>
          <Table.Header>Name</Table.Header>
          <Table.Header>Role</Table.Header>
        </Table.Row>

        {members.map((member) => (
          <Table.Row key={member.id}>
            <Table.Data>{member.id}</Table.Data>
            <Table.Data>{member.name}</Table.Data>
            <Table.Data>{member.role}</Table.Data>
          </Table.Row>
        ))}
      </Table>
    </Section>
  );
};

export default TeamList;
