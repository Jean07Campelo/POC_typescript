export type newRegisterLibrary = {
  id?: number;
  userId?: number;
  book: number;
  status: number;
};

export type newRegisterLibraryEntity = Omit<newRegisterLibrary, "id">;

export type checkReadingEntity = Omit<newRegisterLibrary, "id" | "status">;

export type updateReadingEntity = Omit<newRegisterLibrary, "userId" | "book">;
