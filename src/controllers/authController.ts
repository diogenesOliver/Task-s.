import { UserModel } from "../model/User";
import { Request, Response } from 'express'

import Logger from '../../config/logger'

import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export async function creatingANewUser(req: Request, res: Response) {

    try {

        const { email, password, name, age } = req.body

        const salt = await bcrypt.genSalt(10)
        const passwordCrypt = await bcrypt.hash(password, salt)

        const newUser = new UserModel(

            {
                email,
                password: passwordCrypt,
                name,
                age
            }

        )

        const savingUserInDatabase = await UserModel.create(newUser)

        res.status(200).send(savingUserInDatabase)
        console.log(savingUserInDatabase)

    } catch (e: any) {

        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })

    }
}

export async function userAthenticate(req: Request, res: Response){

    

}