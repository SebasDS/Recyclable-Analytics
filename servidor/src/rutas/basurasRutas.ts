import { Router } from 'express';
import basurasControlador from '../controladores/basurasControlador';

class BasurasRutas {

	public router: Router = Router();

	constructor(){
		this.config();
	}

	config(): void{
		this.router.get('/', basurasControlador.leer);
		this.router.get('/:id', basurasControlador.leerUno);
		this.router.delete('/:id', basurasControlador.delete);
		this.router.put('/:id', basurasControlador.update);
		this.router.post('/', basurasControlador.create);
	}
}

const basurasRutas = new BasurasRutas();
export default basurasRutas.router;