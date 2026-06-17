import type { Request, Response } from "express";
export declare const createTransaction: (req: any, res: Response) => Promise<void>;
export declare const getTransaction: (req: Request, res: Response) => Promise<void>;
export declare const updateTransaction: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteTransaction: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=financeController.d.ts.map