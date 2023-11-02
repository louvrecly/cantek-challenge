import { createContext, Dispatch, SetStateAction } from 'react';
import { Member } from '../types/member';

export type TeamContextValue = {
  members: Member[];
  maxId: number;
  setMembers: Dispatch<SetStateAction<Member[]>>;
};

export const initialValue: TeamContextValue = {
  members: [
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
  ],
  maxId: 4,
  setMembers: () => null,
};

export const TeamContext = createContext(initialValue);
