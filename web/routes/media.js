import { authTokenModel } from '../database/index.js';
import { Router } from 'express';
import axios from 'axios';
const route = Router();

// get user media from instagram
route.get('/', async (_req, res, next) => {
    try {
        const shop = res?.locals?.shopify?.session?.shop;

        // find instagram accesstoken for the shop
        const tokenInfo = await authTokenModel.findOne({ shop });

        // if access token found get media from instagram
        if (tokenInfo?.accessToken) {
            const fields = 'id,caption,media_type,media_url,permalink,timestamp';
            const url = `${process.env.INSTAGRAM_GRAPH_BASE_URL}/me/media?fields=${fields}&access_token=${tokenInfo.accessToken}`;
            const response = await axios.get(url);
            return res.json(response?.data);
        } else {
            next({ error: { message: 'no access token found' } });
        }
    } catch (error) {
        next({ error });
    }
});

export default route;
