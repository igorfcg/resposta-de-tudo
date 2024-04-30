import { pacientes } from "./hospital-lib"

interface Paciente {
    nome: string
    setor: string
}

interface Setor {
    nome: string
    fila: Paciente[]
}

interface Hospital {
    setores: Setor[]
}

const hospital: Hospital = {
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
}

console.log("> Hopistal antes da triagem");

/**
 * Para cada paciente na lista de pacientes verifica qual setor ele quer ir. Depois apenas coloca o paciente na fila de cada setor corresponde
 */
pacientes.forEach(paciente => {
    hospital.setores.forEach(setor => {
        if(paciente.setor == setor.nome) {
            setor.fila.push(paciente)
        }
    })
})

console.log("> Hopistal depois da triagem");

console.log(hospital.setores[0]);
console.log(hospital.setores[1]);
console.log(hospital.setores[2]);

