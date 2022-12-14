import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

import Logger from '../../../config/logger'

export class UpdateTask{

    async updatingTask(req: Request, res: Response){

        try{

            const id = req.params.id
            const data = req.body
            const task = await TaskModel.findById(id)
    
            if(!task){
                return res.status(404).json({ error: 'Essa task não existe' })
            }
    
            await TaskModel.updateOne({ id: id }, data)
    
            return res.status(200).send(data)
    
        }catch(e: any){
            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! tente novamente mais tarde!" })
        }

    }

}