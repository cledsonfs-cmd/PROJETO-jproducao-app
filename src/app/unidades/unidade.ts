export class Unidade {
    id: number;
    dataCadastro: String;
    descricao: String;
    abreviacao: String;
    quantidade: number;
    update: String;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.abreviacao = '';
        this.quantidade = 0;
        this.update = '';
    }
}