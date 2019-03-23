import * as Router from 'koa-router';
import * as body from 'koa-body';
import { statsPath, statsHandler } from './routings/stats';
import { usagePath, usageHandler } from './routings/tables/usage/get';
import { tariffsPath, tariffsHandler } from './routings/tables/tariffs/get';
import { usageAddPath, usageAddHandler } from './routings/tables/usage/add';
import { tariffsAddPath, tariffsAddHandler } from './routings/tables/tariffs/add';

const router = new Router();
const regularBody = body();

router
    .get(statsPath, statsHandler)
    .get(usagePath, usageHandler)
    .get(tariffsPath, tariffsHandler)
    .post(usageAddPath, regularBody, usageAddHandler)
    .post(tariffsAddPath, regularBody, tariffsAddHandler);

export default router;
