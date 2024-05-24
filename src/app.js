import createServer from './frameworks/express/createServer.js'
import {connection} from './adapters/database/connection.js'

const app = createServer()
connection()

export default app