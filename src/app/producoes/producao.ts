export class Producao {
    id: number;
    dataCadastro: string;
    data: string;
	quantidade: number;
    peso: number;
    id_ordem_producao: number;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.data = '';
        this.quantidade = 0;
        this.peso = 0;
        this.id_ordem_producao = 0;
    }
}