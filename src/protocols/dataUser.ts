export type DataUser = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export type DataUserEntity = Omit<DataUser, "id">;
