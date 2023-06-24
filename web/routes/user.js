import { Router } from 'express';

const router = Router();

router.post('/', async (_req, res) => {
    try {
        return res.status(200).json({
            message: 'user created successfully!',
        });
    } catch (error) {
        return res.status(500).json({
            message: 'There was an server side error!',
        });
    }
});

export default router;
