interface ITasks{
    title: string,
    description: string,
    difficulty: number,
    status: boolean
}

export class TaskEntitie{

    public props: ITasks

    constructor(props: ITasks){
        this.props = props
    }

}