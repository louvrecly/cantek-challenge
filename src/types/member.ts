export const ALL_ROLES = ['Dev', 'UXUI', 'PM', 'QA'] as const;
export type Role = (typeof ALL_ROLES)[number];

export type MemberFormValues = {
  name: string;
  role: Role;
};

export type Member = MemberFormValues & { id: number };
