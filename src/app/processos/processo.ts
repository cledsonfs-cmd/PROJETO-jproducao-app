export class Processo {
    id: number;
    dataCadastro: string;
    id_empresa: number;
    id_processo: number;
    id_setor: number;
    descricao: string;
    formula: string;
    observacao: string;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_empresa = 0;
        this.id_processo = 0;
        this.id_setor = 0;
        this.descricao = '';
        this.formula = '';
        this.observacao = '';
        this.update = '';
    }
}