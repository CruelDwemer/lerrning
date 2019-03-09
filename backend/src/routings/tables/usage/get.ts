import { Table } from '../../../utils';
import { connection } from '../../../connection';
import { Middleware } from 'koa-compose';
import { IAppRouteContext } from '../../../types';

export const usagePath = '/api/tables/usage';
export const usageHandler: Middleware<IAppRouteContext> = async (ctx) => {
    const query = await connection.select().from(Table.Usage);
    ctx.body = query;
}
