import {Request, Response, Router} from 'express'
import { notesRoutes } from './notes'

export const routes = Router()

routes.get('/', (req: Request, res: Response)=> {
    res.json({true:"ping"})
})
routes.use('/notes', notesRoutes)