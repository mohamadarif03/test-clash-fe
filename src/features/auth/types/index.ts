export type LoginInput = {
  email: string;
  password: string;
};

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  rank_tier: string;
  avatar?: string;
};

export type RegisterResponse = {
  message: string;
  data: User;
};

export type LoginResponse = {
  message: string;
  token: string;
  user: User;
};

export type AuthError = {
  error: string;
};
