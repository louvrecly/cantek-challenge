import { createContext, Dispatch, SetStateAction } from 'react';
import { Member } from '../types/member';

export type TeamContextValue = {
  members: Member[];
  maxId: number;
  setMembers: Dispatch<SetStateAction<Member[]>>;
};

const initialValue: TeamContextValue = {
  members: [],
  maxId: 0,
  setMembers: () => null,
};

export const TeamContext = createContext(initialValue);
