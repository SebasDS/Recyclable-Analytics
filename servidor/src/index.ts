import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRutas from './rutas/indexRutas';
import basurasRutas from './rutas/basurasRutas';

class Servidor {

	public aplicacion: Application;

	constructor() {
		this.aplicacion = express();
		this.config();
		this.routes();
	}

	config(): void{
		this.aplicacion.set('port', process.env.PORT || 3000);
		this.aplicacion.use(morgan('dev'));
		this.aplicacion.use(cors());
		this.aplicacion.use(express.json());
		this.aplicacion.use(express.urlencoded({extended: false}));
	}

	routes(): void{
		this.aplicacion.use('/', indexRutas);
		this.aplicacion.use('/api/basuras', basurasRutas);
	}

	start(): void{
		this.aplicacion.listen(this.aplicacion.get('port'), () => {
			console.log('Servidor en puerto', this.aplicacion.get('port'));
		});
	}
}

const servidor = new Servidor();
servidor.start();