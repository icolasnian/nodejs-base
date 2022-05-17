
import App from './app'
import dotenv from "dotenv"
import log from "./utils/log.util"
import Database from './database';

(async () => {
    dotenv.config()
    try {
        //validateEnv()
        await Database.init()
        const app = new App(Number(process.env.PORT))
        app.listen()
    } catch (err) {
        log.error(err)
    }
})();
