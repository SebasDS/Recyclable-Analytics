"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControlador = void 0;
class IndexControlador {
    index(req, res) {
        res.json({ text: 'El api esta en /api/basuras' });
    }
}
exports.indexControlador = new IndexControlador();
