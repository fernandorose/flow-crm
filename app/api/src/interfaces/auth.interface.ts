export interface AuthPayload {
  userId: string;
  companyId: string | null;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthPayload;
    }
  }
}

export {};
