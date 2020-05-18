"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basurasControlador_1 = __importDefault(require("../controladores/basurasControlador"));
class BasurasRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', basurasControlador_1.default.leer);
        this.router.get('/:id', basurasControlador_1.default.leerUno);
        this.router.delete('/:id', basurasControlador_1.default.delete);
        this.router.put('/:id', basurasControlador_1.default.update);
        this.router.post('/', basurasControlador_1.default.create);
    }
}
const basurasRutas = new BasurasRutas();
exports.default = basurasRutas.router;
