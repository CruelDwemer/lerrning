import { IRouterContext } from "koa-router";
import * as Koa from 'koa';

export interface IAppRouteContext<T = unknown> extends IRouterContext {
    request: IAppRequest<T>
}

export interface IAppRequest<T> extends Koa.Request {
    body: T;
}
