import { Setor } from "../setores/setor";

export class Maquina {
    id: number;
    dataCadastro: string;
    descricao: string;
    observacao: string;
    setor: Setor;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.observacao = '';
        this.setor = new Setor();
        this.update = '';
    }
}