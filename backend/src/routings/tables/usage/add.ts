import { Table } from '../../../utils';
import { connection } from '../../../connection';
import { Middleware } from 'koa-compose';
import { IAppRouteContext } from '../../../types';
import { IUsageAddRequest } from '../types';


export const usageAddPath = '/api/tables/usage/add';
export const usageAddHandler: Middleware<IAppRouteContext<IUsageAddRequest>> = async (ctx) => {
    const { body } = ctx.request;
    const query = await connection(Table.Usage)
    .returning(['id', 'createdAt'])
    .insert({
        ...body,
        createdAt: connection.raw('NOW()')
    })
    ctx.body = query;
}