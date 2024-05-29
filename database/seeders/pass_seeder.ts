import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { PassFactory } from '../factories/pass_factory.js'

export default class extends BaseSeeder {
  async run() {
    await PassFactory.createMany(10)
  }
}
