interface IUser{
    email: string,
    password: string
}

export class UserEntitie{

    public props: IUser

    constructor(props: IUser){
        this.props = props
    }

}