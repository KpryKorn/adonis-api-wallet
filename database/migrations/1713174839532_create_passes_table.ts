import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'passes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('adherent_nom').notNullable()
      table.string('adherent_prenom').notNullable()
      table.integer('adherent_num_secu').notNullable()
      table.string('periode_validite').notNullable()
      table.integer('num_adherent').notNullable()
      table.integer('num_amc').notNullable()
      table.string('type_conv').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
