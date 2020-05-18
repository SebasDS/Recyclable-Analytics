"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRutas_1 = __importDefault(require("./rutas/indexRutas"));
const basurasRutas_1 = __importDefault(require("./rutas/basurasRutas"));
class Servidor {
    constructor() {
        this.aplicacion = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.aplicacion.set('port', process.env.PORT || 3000);
        this.aplicacion.use(morgan_1.default('dev'));
        this.aplicacion.use(cors_1.default());
        this.aplicacion.use(express_1.default.json());
        this.aplicacion.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.aplicacion.use('/', indexRutas_1.default);
        this.aplicacion.use('/api/basuras', basurasRutas_1.default);
    }
    start() {
        this.aplicacion.listen(this.aplicacion.get('port'), () => {
            console.log('Servidor en puerto', this.aplicacion.get('port'));
        });
    }
}
const servidor = new Servidor();
servidor.start();
