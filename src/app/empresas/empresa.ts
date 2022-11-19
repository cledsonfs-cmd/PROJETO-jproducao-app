export class Empresa {
    id: number;
    dataCadastro: string;
    codigoEmpresa: string;
	razaoSocial: string;
	nomeReduzido: string;
	cnpj: string;
	rua: string;
	bairro: string;
	municipio: string;
	uf: string;
	cep: string;
	pasta: string;
	pastaHistorico: string;
	inscricaoEstadual: string;
	codigoBarras: string;

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