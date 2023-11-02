import { ReactNode, useState, useMemo } from 'react';
import { TeamContext, initialValue } from '../contexts/team';

interface TeamProviderProps {
  children: ReactNode;
}

export const TeamProvider = ({ children }: TeamProviderProps) => {
  const [members, setMembers] = useState(initialValue.members);
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
