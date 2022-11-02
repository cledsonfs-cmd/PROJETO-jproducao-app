export class Empresa {
    id: number;
    dataCadastro: string;
    codigoEmpresa
	razaoSocial
	nomeReduzido
	cnpj
	rua
	bairro
	municipio
	uf
	cep
	pasta
	pastaHistorico
	inscricaoEstadual
	codigoBarras

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
        this.codigoEmpresa = '';
        this.razaoSocial = '';
        this.nomeReduzido = '';
        this.cnpj = '';
        this.rua = '';
        this.bairro = '';
        this.municipio = '';
        this.uf = '';
        this.cep = '';
        this.pasta = '';
        this.pastaHistorico = '';
        this.inscricaoEstadual = '';
        this.codigoBarras = '';
    }
}