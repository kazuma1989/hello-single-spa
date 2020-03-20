// @ts-check
import * as singleSpa from 'single-spa'

singleSpa.registerApplication(
  'app1',
  () => import('./app1'),
  location => location.pathname.startsWith('/app1'),
)

singleSpa.start()
