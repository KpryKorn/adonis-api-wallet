/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import PassesController from '../app/controllers/passes_controller.js'
// import { middleware } from './kernel.js'
import SessionController from '../app/controllers/session_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.group(() => {
      router.get('passes', [PassesController, 'index']) // all passes
      router.get('passes/:id', [PassesController, 'show']) // one pass
      router.put('passes/update/:id', [PassesController, 'update']) // update pass
      router.post('passes', [PassesController, 'store']) // create pass
      router.delete('passes/delete/:id', [PassesController, 'destroy']) // delete pass
    })
  })
  // .use(middleware.auth())
  .prefix('api')

router.post('login', [SessionController, 'store'])
