import * as Router from 'koa-router';
import { statsPath, statsHandler } from './routings/stats';

const router = new Router();

router
    .get(statsPath, statsHandler);

export default router;
