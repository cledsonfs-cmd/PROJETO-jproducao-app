export class Representante {
    id: number;
    dataCadastro: string;
    codigo: string;
    nome: string;
    rua: string;
    bairro: string;
    municipio: string;
    uf: string;
    cep: string;
    telefone: string;
    fax: string;
    celular: string;
    percentualComissao: number;
    percentualComissaoSemDesc: number;
    email: string;
    contaContabil: string;
    nomeFantasia: string;
    ativo: boolean;
    update: string;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.codigo = '';
        this.nome = '';
        this.rua = '';
        this.bairro = '';
        this.municipio = '';
        this.uf = '';
        this.cep = '';
        this.telefone = '';
        this.fax = '';
        this.celular = '';
        this.percentualComissao = 0;
        this.percentualComissaoSemDesc = 0;
        this.email = '';
        this.contaContabil = '';
        this.nomeFantasia = '';
        this.ativo = false;
        this.update = '';
    }
}