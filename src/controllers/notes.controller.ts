import { Request, Response } from "express";
import { Note } from "../models/notes";

export class notesController {
  async list(req: Request, res: Response) {
    try {
      const show = await Note.findAll();
      return res.json(show);
    } catch (e) {
      return res.json({ e });
    }
  }
  async add(req: Request, res: Response) {
    const name = req.body.name;
    const done = req.body.done;
    console.log(done);
    try {
      if (!name) {
        return res.status(400).json({ error: "O nome da nota é obrigatório" });
      }
      if (!done) {
        const newNote = await Note.create({ name });
        return res.json({ newNote });
      }
      const newNote = await Note.create({ name, done: true });
      return res.json({ newNote });
    } catch (e) {
      return res.json({ e });
    }
  }
  async update(req: Request, res: Response) {
    const name = req.body.name
    const done = req.body.done
    const newName = req.body.newName
    if(!name){
        return res.status(401).json({error:'Nome antigo é obrigatório'})
    }
    if(!newName && !done){
        return res.json({error:'Nada para ser alterado'})
    }
    try{
        const updatedNote = await Note.update({
            name: newName,
            done : done
        },{
            where:{
                name : name
            }
        })
        return res.json({updatedNote})
    }catch(e){
        return res.status(401).json({e})
    }
  }
  async remove(req: Request, res: Response) {
    const name = req.body.name
    if(!name){
        return res.json({error:'Nome é obrigatório'})
    }
    try{
        const result = await Note.destroy({
            where: {
                name: name
            }
        })
        return res.status(200).json({result})
    }catch(e){
        return res.status(401).json({e})
    }
  }
}
