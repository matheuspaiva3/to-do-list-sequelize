import { Router } from "express";
import { notesController } from "../controllers/notes.controller";

const notesControllers = new notesController()
export const notesRoutes = Router()

notesRoutes.get('/', notesControllers.list)
notesRoutes.post('/', notesControllers.add)
notesRoutes.put('/', notesControllers.update)
notesRoutes.delete('/', notesControllers.remove)
