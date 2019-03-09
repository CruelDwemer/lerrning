const Table = require('../core/tables');

exports.up = async (knex) => {
    await knex.schema.createTable(Table.Usage, (t) => {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.date('recordedAt').notNull();
        t.decimal('hotWaterUsage').notNull();
        t.decimal('coldWaterUsage').notNull();
        t.decimal('electricityUsage').notNull();
    });

    console.log(`table '${Table.Usage}' successfully created`);

    await knex.schema.createTable(Table.Tariffs, (t) => {
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

    console.log(`table '${Table.Tariffs}' successfully created`);

    await knex.schema.createTable(Table.Companies, (t) => {
        t.increments('id').unsigned().primary();
        t.dateTime('createdAt').notNull();
        t.dateTime('updatedAt').nullable();
        t.dateTime('deletedAt').nullable();

        t.date('recordedAt').notNull();
        t.decimal('sibeco').notNull();
        t.decimal('gorvodokanal').notNull();
        t.decimal('novosibirskenergosbyt').notNull();
    });

    console.log(`table '${Table.Companies}' successfully created`);
};

exports.down = async (knex) => {
    await knex.schema.dropTable(Table.Usage);
    await knex.schema.dropTable(Table.Tariffs);
    await knex.schema.dropTable(Table.Companies);
};
