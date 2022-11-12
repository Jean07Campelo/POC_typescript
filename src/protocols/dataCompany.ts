export type dataCompany = { 
    id: number,
    name: string };

export type dataCompanyEntity = Omit <dataCompany, "id" >;