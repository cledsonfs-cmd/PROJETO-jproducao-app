export class Produto {
    id: number;
    dataCadastro: string;
    descricao: string;
    id_unidade: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.id_unidade = 0;
        this.update = '';
    }
}