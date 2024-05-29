import type { HttpContext } from '@adonisjs/core/http'
import Pass from '../models/pass.js'

export default class PassesController {
  async index({ request }: HttpContext) {
    const passes = await Pass.query()
    return passes
  }

  async show({ request, params, response }: HttpContext) {
    try {
      const pass = await Pass.find(params.id)
      if (pass) {
        return pass
      } else {
        response.status(404).send({ message: 'Pass non trouvé.' })
      }
    } catch (error) {
      console.log(error)
      response.status(500).send({ message: 'Erreur serveur.' })
    }
  }

  async update({ auth, request, params, response }: HttpContext) {
    try {
      const pass = await Pass.find(params.id)
      if (!pass) {
        return response.status(404).json({
          message: 'Pass non trouvé.',
        })
      }

      pass.adherentNom = request.input('adherentNom', pass.adherentNom)
      pass.adherentPrenom = request.input('adherentPrenom', pass.adherentPrenom)
      pass.adherentNumSecu = request.input('adherentNumSecu', pass.adherentNumSecu)
      pass.periodeValidite = request.input('periodeValidite', pass.periodeValidite)
      pass.numAdherent = request.input('numAdherent', pass.numAdherent)
      pass.numAMC = request.input('numAMC', pass.numAMC)
      pass.typeConv = request.input('typeConv', pass.typeConv)

      await pass.save()

      return response.status(200).json({
        message: 'Pass mis à jour avec succès.',
        data: pass,
      })
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: 'Erreur serveur.',
      })
    }
  }

  async store({ request, response }: HttpContext) {
    try {
      const adherentNom = request.input('adherentNom')
      const adherentPrenom = request.input('adherentPrenom')
      const adherentNumSecu = request.input('adherentNumSecu')
      const periodeValidite = request.input('periodeValidite')
      const numAdherent = request.input('numAdherent')
      const numAMC = request.input('numAMC')
      const typeConv = request.input('typeConv')

      if (
        !adherentNom ||
        !adherentPrenom ||
        !adherentNumSecu ||
        !periodeValidite ||
        !numAdherent ||
        !numAMC ||
        !typeConv
      ) {
        return response.status(400).json({
          message: 'Tous les champs sont obligatoires.',
        })
      }

      const pass = new Pass()
      pass.adherentNom = adherentNom
      pass.adherentPrenom = adherentPrenom
      pass.adherentNumSecu = adherentNumSecu
      pass.periodeValidite = periodeValidite
      pass.numAdherent = numAdherent
      pass.numAMC = numAMC
      pass.typeConv = typeConv

      await pass.save()

      return response.status(201).json({
        message: 'Pass créé avec succès.',
        data: pass,
      })
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: 'Erreur serveur.',
      })
    }
  }

  async destroy({ request, params, response }: HttpContext) {
    try {
      const pass = await Pass.find(params.id)
      if (!pass) {
        return response.status(404).json({
          message: 'Pass non trouvé.',
        })
      }

      await pass.delete()

      return response.status(200).json({
        message: 'Pass supprimé avec succès.',
      })
    } catch (error) {
      console.error(error)
      return response.status(500).json({
        message: 'Erreur serveur.',
      })
    }
  }
}
