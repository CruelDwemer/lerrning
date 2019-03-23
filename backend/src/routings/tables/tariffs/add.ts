import { Table } from '../../../utils';
import { connection } from '../../../connection';
import { Middleware } from 'koa-compose';
import { IAppRouteContext } from '../../../types';
import { ITariffsAddRequest } from '../types';

/*
t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.date('recordedAt').notNull();
        t.date('startedAt').notNull();
        t.date('endedAt').nullable();
        t.decimal('hotWaterTariff').notNull();
        t.decimal('coldWaterTariff').notNull();
        t.decimal('electricityTariff').notNull();
        t.decimal('sanitation').notNull();
*/

export const tariffsAddPath = '/api/tables/tariffs/add';
export const tariffsAddHandler: Middleware<IAppRouteContext<ITariffsAddRequest>> = async (ctx) => {
    const { body } = ctx.request;
    const query = await connection(Table.Tariffs)
    .returning(['id', 'createdAt'])
    .insert({
        recordedAt: body.recordedAt,
        startedAt: body.startedAt,
        hotWaterTariff: body.hotWaterTariff,
        coldWaterTariff: body.coldWaterTariff,
        electricityTariff: body.electricityTariff,
        sanitation: body.sanitation,
        createdAt: connection.raw('NOW()')
    })
    ctx.body = query;
}