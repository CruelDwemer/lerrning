import { Table } from '../../../utils';
import { connection } from '../../../connection';
import { Middleware } from 'koa-compose';
import { IAppRouteContext } from '../../../types';

export const tariffsPath = '/api/tables/tariffs';
export const tariffsHandler: Middleware<IAppRouteContext> = async (ctx) => {
    const query = await connection.select().from(Table.Tariffs);
    ctx.body = query;
}