"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hospital_lib_1 = require("./hospital-lib");
var hospital = {
    setores: [
        {
            nome: "Cardiologista",
            fila: []
        },
        {
            nome: "Ortopedista",
            fila: []
        },
        {
            nome: "Clínico Geral",
            fila: []
        }
    ]
};
console.log("> Hopistal antes da triagem");
hospital_lib_1.pacientes.forEach(function (paciente) {
    hospital.setores.forEach(function (setor) {
        if (paciente.setor == setor.nome) {
            setor.fila.push(paciente);
        }
    });
});
console.log("> Hopistal depois da triagem");
console.log(hospital.setores[0]);
console.log(hospital.setores[1]);
console.log(hospital.setores[2]);
