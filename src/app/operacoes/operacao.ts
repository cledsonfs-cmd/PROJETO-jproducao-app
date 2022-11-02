export class Operacao {
    id: number;
    dataCadastro: string;
    id_processo: number;
    ordinal: number;
    descricao: string;
    tempo: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_processo = 0;
        this.ordinal = 0;
        this.descricao = '';
        this.tempo = 0;
        this.update = '';
    }
}