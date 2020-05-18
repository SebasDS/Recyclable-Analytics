"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class BasurasControlador {
    leer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const basuras = yield database_1.default.query('SELECT * FROM basuras');
            res.json(basuras);
        });
    }
    leerUno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const basura = yield database_1.default.query('SELECT * FROM basuras WHERE id=?', [id]);
            if (basura.length > 0) {
                return res.json(basura[0]);
            }
            res.status(404).json({ text: 'Esa basura no existe' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM basuras WHERE id=' + req.params.id);
            const basurasRestantes = yield database_1.default.query('SELECT * FROM basuras');
            res.json(basurasRestantes);
            console.log('Basura Eliminada');
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE basuras set ? WHERE id=?', [req.body, id]);
            res.json({ text: 'Actualizando la basura ' + req.params.id });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO basuras set ?', [req.body]);
            console.log('Basura Guardada!');
        });
    }
}
const basurasControlador = new BasurasControlador();
exports.default = basurasControlador;
