import {Request, Response} from 'express';

import pool from '../database';

class BasurasControlador{

	public async leer ( req: Request, res: Response ): Promise<void>{
		const basuras = await pool.query('SELECT * FROM basuras');
		res.json(basuras);
	}

	public async leerUno ( req: Request, res: Response ): Promise<any>{
		const { id } = req.params;
		const basura = await pool.query('SELECT * FROM basuras WHERE id=?', [id]);
		if(basura.length>0){
			return res.json(basura[0]);
		}
		res.status(404).json({text: 'Esa basura no existe'});
		
	}

	public async delete(req: Request, res: Response){
		await pool.query('DELETE FROM basuras WHERE id=' + req.params.id);
		const basurasRestantes = await pool.query('SELECT * FROM basuras');
		res.json(basurasRestantes);
		console.log('Basura Eliminada');
	}

	public async update(req: Request, res: Response): Promise<void>{
		const { id } = req.params;
		await pool.query('UPDATE basuras set ? WHERE id=?', [req.body, 	id]);
		res.json({text: 'Actualizando la basura ' + req.params.id });
	}

	public async create(req: Request, res: Response): Promise<void>{
		await pool.query('INSERT INTO basuras set ?', [req.body]);	
		console.log('Basura Guardada!');	
	}
}

const basurasControlador = new BasurasControlador();
export default basurasControlador;