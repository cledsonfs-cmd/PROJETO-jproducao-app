export class Tarefa {
    id: number;
    dataCadastro: string;
    id_pop: number;
	ordinal: number;
	descricao: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_pop = 0;
	    this.ordinal = 0;
	    this.descricao = '';
    }
}