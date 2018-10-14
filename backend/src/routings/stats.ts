import * as Koa from 'koa';
import { Middleware } from 'koa-compose';

export const statsPath = '/api/stats';
export const statsHandler: Middleware<Koa.Context> = (ctx) => {
    ctx.body = { numberOfCols: 20 };
}
