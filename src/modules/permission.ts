import { type UserModule } from '~/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ router }) => {
  router.beforeEach(async (to, from, next) => {
    const user = useUserStore()

    // set page title
    document.title = `${to.meta.title || to.name}`

    // Account login status
    if (user.hasAuth) {
      if (to.meta.guest === true) {
        // Only allow guest access
        next({ path: from.path || '/' })
      }
      else {
        // Great! smooth.
        next()
      }
    }
    else {
      if (to.meta.auth === false) {
        // Everyone has access
        next()
      }
      else {
        // Ban guest access
        next(`/login?redirectURL=${to.path}`)
      }
    }
  })
}
