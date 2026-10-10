export interface Company {
  id: string;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export type CreateCompanyData = Omit<
  Company,
  "id" | "created_at" | "updated_at"
>;
