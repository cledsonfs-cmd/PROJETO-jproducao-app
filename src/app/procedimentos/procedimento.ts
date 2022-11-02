export class Procedimento {
    id: number;
    dataCadastro: string;
    sequencial: number;
	id_tarefa: number;	
	descricao: string;
    observacao: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.sequencial = 0;
        this.id_tarefa = 0;	
        this.descricao = '';
        this.observacao = '';
    }
}