import { registerApplication, start } from 'single-spa'

registerApplication(
  'app-nav',
  () => import('./Nav'),
  location => location.pathname.startsWith('/pug/'),
)

registerApplication(
  'app-main',
  () => import('./index'),
  location => location.pathname.startsWith('/pug/'),
)

start()
