export interface Customer {
  id: string;
  company_id: string;
  email: string;
  name: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

export type CreateCustomerData = Omit<
  Customer,
  "id" | "created_at" | "updated_at"
>;
