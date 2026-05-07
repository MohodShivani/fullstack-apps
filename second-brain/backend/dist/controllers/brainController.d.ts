import type { Request, Response } from "express";
export declare const shareBrain: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getSharedBrain: (req: Request<{
    shareLink: string;
}>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=brainController.d.ts.map