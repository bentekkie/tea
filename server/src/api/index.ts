import { Router, Request, Response } from 'express';
const version: String = "0.1";


const router: Router = Router();
router.get('/', (req: Request, res: Response) => {
  res.send('Api version: '+ version);
});

export const ApiController: Router = router;
