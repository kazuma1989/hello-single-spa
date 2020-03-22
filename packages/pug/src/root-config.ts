import { registerApplication, start } from 'single-spa'

registerApplication(
  'app_1',
  () => import('./index'),
  location => location.pathname.startsWith('/pug/'),
)

start()
