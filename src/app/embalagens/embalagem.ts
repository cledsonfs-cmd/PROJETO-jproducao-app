export class Embalagem {
    id: number;
    dataCadastro: string;
    descricao: string;
    quantidade: number;
    id_unidade: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.quantidade = 0;
        this.id_unidade = 0;
        this.update = '';
    }
}