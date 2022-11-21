import { Unidade } from "../unidades/unidade";

export class Produto {
    id: number;
    dataCadastro: string;
    descricao: string;
    unidade: Unidade;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.unidade = new Unidade();
        this.update = '';
    }
}