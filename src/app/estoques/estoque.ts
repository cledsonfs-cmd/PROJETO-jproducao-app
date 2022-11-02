export class Estoque {
    id: number;
    dataCadastro: string;
    descricao: string;
	quantidade: number;
	id_unidade: number;
	movimento: string;
	observacao: string;
	saldo: number;
	update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.quantidade = 0;
        this.id_unidade = 0;
        this.movimento = '';
        this.observacao = '';
        this.saldo = 0;
        this.update = '';
    }
}