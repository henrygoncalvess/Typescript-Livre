"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(canal, curso) {
        this.canal = canal;
        this.curso = curso;
    }
}
let curso1 = new Curso('Estudonauta', 'MySQL');
console.log(curso1.canal);
console.log(curso1.curso);
