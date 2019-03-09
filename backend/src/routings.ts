import * as Router from 'koa-router';
import * as body from 'koa-body';
import { statsPath, statsHandler } from './routings/stats';
import { usagePath, usageHandler } from './routings/tables/usage/get';
import { usageAddPath, usageAddHandler } from './routings/tables/usage/add';

const router = new Router();
const regularBody = body();

router
    .get(statsPath, statsHandler)
    .get(usagePath, usageHandler)
    .post(usageAddPath, regularBody, usageAddHandler);

export default router;
