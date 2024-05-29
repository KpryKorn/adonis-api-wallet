import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pass extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare adherentNom: string

  @column()
  declare adherentPrenom: string

  @column()
  declare adherentNumSecu: number

  @column()
  declare periodeValidite: string

  @column()
  declare numAdherent: number

  @column()
  declare numAMC: number

  @column()
  declare typeConv: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
