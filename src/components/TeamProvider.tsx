import { ReactNode, useState, useMemo } from 'react';
import { TeamContext } from '../contexts/team';
import { Member } from '../types/member';

interface TeamProviderProps {
  children: ReactNode;
}

const INITIAL_MEMBERS: Member[] = [
  {
    id: 1,
    name: 'Louvre',
    role: 'Dev',
  },
  {
    id: 2,
    name: 'Charlene',
    role: 'Dev',
  },
  {
    id: 3,
    name: 'Eric',
    role: 'Dev',
  },
  {
    id: 4,
    name: 'Calvin',
    role: 'Dev',
  },
];

export const TeamProvider = ({ children }: TeamProviderProps) => {
  const [members, setMembers] = useState<Member[]>(INITIAL_MEMBERS);
  const maxId = useMemo(
    () => members.reduce((id, member) => Math.max(id, member.id), 0),
    [members],
  );

  return (
    <TeamContext.Provider value={{ members, maxId, setMembers }}>
      {children}
    </TeamContext.Provider>
  );
};
