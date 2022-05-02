import mongoose from 'mongoose'
import log from './utils/log.util'
import dotenv from 'dotenv'
dotenv.config()

class Database {

    /**
     * Stablish connection with mongodb
     */
    static async init(): Promise<void> {
        const MONGO_PATH: string = process.env.MONGO_PATH!

        try {
            await mongoose.connect(MONGO_PATH)
            log.info('Database connected.')
        } catch (err) {
            log.error(err)
            log.error(
                'Error connecting to Database. Please fix the issue reported above and try again.'
            )
            process.exit(1)
        }
    }
}

export default Database