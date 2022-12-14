import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

import Logger from '../../../config/logger'

export class ChangeStatusTask{

    async changingStatusTask(req: Request, res: Response){

        try{

            let { status } = req.body

            const taskId = req.params.id

            const task = await TaskModel.findById(taskId)

            console.log(task)
    
            /* if(!task)
                return res.status(500).send('Houve um erro tente novamente mais tarde!')
    
            status = true
            await TaskModel.updateOne({ id: taskId }, status)
            
            return res.status(200).send('Card atualizado com sucesso!') */
    
        }catch(e: any){
    
            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })
    
        }

    }

}