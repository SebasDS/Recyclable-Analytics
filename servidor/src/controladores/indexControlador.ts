import {Request, Response} from 'express'

class IndexControlador{

	public index ( req: Request, res: Response ){
		res.json({text: 'El api esta en /api/basuras'});
	}
}

export const indexControlador = new IndexControlador();