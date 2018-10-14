const USAGE_TABLE = 'usage';
const TARIFFS_TABLE = 'tariffs';
const COMPANIES_TABLE = 'companies';

exports.up = async (knex, Promise) => {
    await knex.schema.createTable(USAGE_TABLE, (t) => {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.date('recordedAt').notNull();
        t.decimal('hotWaterUsage').notNull();
        t.decimal('coldWaterUsage').notNull();
        t.decimal('electricityUsage').notNull();
    });

    console.log(`table '${USAGE_TABLE}' successfully created`);

    await knex.schema.createTable(TARIFFS_TABLE, (t) => {
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
    });

    console.log(`table '${TARIFFS_TABLE}' successfully created`);

    await knex.schema.createTable(COMPANIES_TABLE, (t) => {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.date('recordedAt').notNull();
        t.decimal('sibeco').notNull();
        t.decimal('gorvodokanal').notNull();
        t.decimal('novosibirskenergosbyt').notNull();
    });

    console.log(`table '${COMPANIES_TABLE}' successfully created`);
};

exports.down = async (knex, Promise) => {
    await knex.schema.dropTable(USAGE_TABLE);
    await knex.schema.dropTable(TARIFFS_TABLE);
    await knex.schema.dropTable(COMPANIES_TABLE);
};
