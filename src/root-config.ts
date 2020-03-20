import { registerApplication, start } from 'single-spa'

registerApplication(
  'app1',
  () => import('./app1'),
  location => location.pathname.startsWith('/app1'),
)

registerApplication(
  'react',
  () => import('./react'),
  location => location.pathname.startsWith('/react'),
)

start()
