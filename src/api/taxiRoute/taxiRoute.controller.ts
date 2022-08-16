import { Request, Response} from "express"


const getAll = (req: Request, res: Response) => {
    res.status(200).json(`get all routes`);
}

const getOne = (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200).json(`get route with id: ${id}`);
}

const create = (req: Request, res: Response) => {
    res.status(200).json(`create route`);
}

const update = (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200).json(`update routes with id: ${id}`);
}

const remove = (req: Request, res: Response) => {
    const id = req.params.id
    res.status(200).json(`remove route with id: ${id}`);
}

export {getAll, getOne, create, update, remove}