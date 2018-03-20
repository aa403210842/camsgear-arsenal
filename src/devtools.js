// import { app } from 'electron'
import devtron from 'devtron'
import installExtension, {
  VUEJS_DEVTOOLS
} from 'electron-devtools-installer'

export default async () => {
  await installExtension(VUEJS_DEVTOOLS)
  devtron.install()
}
