import { Router } from 'express';
import { feedOptionsModel } from '../database/index.js';

const router = Router();

router.get('/', async (_req, res) => {
    const shop = res?.locals?.shopify?.session?.shop;
    const options = await feedOptionsModel.findOne({ shop });

    return res.json(options || {});
});

router.patch('/update', async (req, res, next) => {
    try {
        const shop = res?.locals?.shopify?.session?.shop;
        const data = req?.body;
        const updatedOptions = await feedOptionsModel.findOneAndUpdate(
            { shop },
            {
                shop,
                ...data,
            },
            { new: true, upsert: true }
        );

        return res.json(updatedOptions);
    } catch (error) {
        next({ error });
    }
});

export default router;
