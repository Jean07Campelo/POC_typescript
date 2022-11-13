export type dataBook = {
  id: number;
  author: number | string;
  name: string;
  year: number;
  company: number | string;
  synopsis: string;
  bookCover: string;
  pages: number;
};

export type dataBookEntity = Omit<dataBook, "id">;
