import { Router } from 'express';
import { fetchAccounts } from '../controllers/AccountController';

const router = Router();
router.get('/accounts', fetchAccounts);
export default router;
