export type dataAuthor = { 
    id: number,
    name: string };

export type dataAuthorEntity = Omit <dataAuthor, "id" >;