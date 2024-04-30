"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triagem = exports.pacientes = void 0;
exports.pacientes = [
    {
        nome: 'Alan Turing',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Ada Lovelace',
        setor: 'Ortopedista',
    },
    {
        nome: 'Grace Hopper',
        setor: 'Cardiologista',
    },
    {
        nome: 'Linus Torvalds',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Margaret Hamilton',
        setor: 'Clínico Geral',
    },
    {
        nome: 'Tim Berners-Lee',
        setor: 'Cardiologista',
    },
];
// Realiza triagem em um paciente
/**
 * Recebe um paciente e atribui uma prioridade a ele
 * @param {Object} paciente
 * @returns {Object} paciente
 */
function triagem(paciente) {
    var prioridades = ['emergência', 'urgente', 'preferencial', 'comum'];
    var prioridade = prioridades[Math.floor(Math.random() * prioridades.length)];
    paciente.prioridade = prioridade;
    return paciente;
}
exports.triagem = triagem;
