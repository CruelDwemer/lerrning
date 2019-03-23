import * as Koa from 'koa';
import router from './routings';

const app = new Koa();
const port = 3001;

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log(`app started at port ${port}`));
