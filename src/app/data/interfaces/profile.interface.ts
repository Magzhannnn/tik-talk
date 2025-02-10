export interface IProfile {
  id: number;
  name: string;
  avatarUrl: string | null;
  subscribersAmount: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  stack: string[];
  city: string;
  description: string;
}
