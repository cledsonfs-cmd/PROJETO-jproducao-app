export class MovimentoSetor {
    id: number;
    dataCadastro: string;
    id_setor: number;
    id_empresa: number;
    id_cartao_op: number;
    peso: number;
    movimento: string;
    id_motivo_perda: number;
    quantidade: number;
    id_funcionario: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_setor = 0;
        this.id_empresa = 0;
        this.id_cartao_op = 0;
        this.peso = 0;
        this.movimento = '';
        this.id_motivo_perda = 0;
        this.quantidade = 0;
        this.id_funcionario = 0;
        this.update = '';
    }
}