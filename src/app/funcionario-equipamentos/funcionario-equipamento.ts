export class FuncionarioEquipamento {
    id: number;
    dataCadastro: string;
    id_funcionario: number;
    id_equipamento: number;
    quantidade: number;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.id_funcionario = 0;
        this.id_equipamento = 0;
        this.quantidade = 0;
        this.update = '';
    }
}