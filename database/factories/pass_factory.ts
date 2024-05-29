import factory from '@adonisjs/lucid/factories'
import Pass from '#models/pass'

export const PassFactory = factory
  .define(Pass, async ({ faker }) => {
    return {
      id: faker.number.int(),
      adherentNom: faker.person.firstName(),
      adherentPrenom: faker.person.lastName(),
      adherentNumSecu: faker.number.int(),
      periodeValidite: faker.string.alpha(),
      numAdherent: faker.number.int(),
      numAMC: faker.number.int(),
      typeConv: faker.string.alpha({
        length: {
          min: 2,
          max: 2,
        },
      }),
    }
  })
  .build()
