import express, { Application, urlencoded } from "express";
import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import log from "./utils/log.util";


class App {
    public express: Application
    public port: number
  
    constructor (port: number) {
      this.express = express()
      this.port = port

      this.initMiddlewares()
      this.initRoutes()
    }
  
    private initMiddlewares (): void {
      this.express.use(helmet())
      this.express.use(cors())
      this.express.use(express.json())
      this.express.use(urlencoded({ extended: false }))
      this.express.use(compression({ level: 6, threshold: 10 * 1000 }))
    }
  
    private initRoutes (): void {
      //this.express.use(router)
    }
  
    public listen (): void {
      this.express.listen(this.port, () => {
        log.info(`App live on port ${this.port}.`)
      })
    }
  }
  
export default App