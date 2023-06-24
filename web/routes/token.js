import { Router } from 'express';
import { authTokenModel } from '../database/index.js';

const router = Router();

router.get('/', async (req, res) => {
    const shop = res?.locals?.shopify?.session?.shop;
    const token = await authTokenModel.findOne({ shop });
    return res.json(token);
});

export default router;
