export class Funcionario {
    id: number;
    dataCadastro: string;
    matricula: string;
	nome: string;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.matricula = '';
        this.nome = '';
        this.update = '';
    }
}