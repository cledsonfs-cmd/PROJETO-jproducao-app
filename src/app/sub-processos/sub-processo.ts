export class SubProcesso {
    id: number;
    dataCadastro: string;
    id_setor: number;
    id_processo: number;
    codigo: string;
    descricao: string;
    tempo: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_setor = 0;
        this.id_processo = 0;
        this.codigo = '';
        this.descricao = '';
        this.tempo = 0;
        this.update = '';
    }
}