export interface User {
  id: string;
  email: string;
  name: string;
  profilePhoto: string | null;
  groups: string[];
  createdAt: string;
}

export interface Group {
  id: string;
  name: string;
  photo: string | null;
  adminId: string;
  frequency: 'daily' | '2-3days' | 'weekly';
  depthLevel: number;
  members: string[];
  inviteCode: string;
  createdAt: string;
  lastPromptDate: string | null;
  promptCount: number;
  memberDetails?: Member[];
}

export interface Member {
  id: string;
  name: string;
  profilePhoto: string | null;
}

export interface MemberPreferences {
  userId: string;
  frequency: 'daily' | '2-3days' | 'weekly';
  depthLevel: number;
  joinedAt: string;
  lastReassessment: string | null;
}

export interface Prompt {
  id: string;
  groupId: string;
  text: string;
  example: string;
  depthLevel: number;
  category: string;
  createdAt: string;
}

export interface Response {
  id: string;
  groupId: string;
  promptId: string;
  userId: string;
  userName: string;
  userPhoto: string | null;
  text: string;
  createdAt: string;
  updatedAt: string;
}

export interface Quote {
  text: string;
  author: string;
}

export type FrequencyOption = 'daily' | '2-3days' | 'weekly';

export type PromptCategory = 
  | 'funny'
  | 'fun'
  | 'memory'
  | 'dreams'
  | 'relationships'
  | 'growth'
  | 'psychology'
  | 'somatic'
  | 'spiritual';
