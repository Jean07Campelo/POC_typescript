export type dataUser = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export type dataUserEntity = Omit<dataUser, "id">;
