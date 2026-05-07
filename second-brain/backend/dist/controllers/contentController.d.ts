import type { Request, Response } from "express";
export declare const createContent: (req: Request, res: Response) => Promise<void>;
export declare const getContent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteContent: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=contentController.d.ts.map