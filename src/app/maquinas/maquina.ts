export class Maquina {
    id: number;
    dataCadastro: string;
    descricao: string;
    observacao: string;
    id_setor: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.descricao = '';
        this.observacao = '';
        this.id_setor = 0;
        this.update = '';
    }
}