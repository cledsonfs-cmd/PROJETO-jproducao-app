export class Empresa {
    id: number;
    dataCadastro: String;
	razaoSocial: String;
	nomeReduzido: String;
	cnpj: String;
	rua: String;
	bairro: String;
	municipio: String;
	uf: String;
	cep: String;
	pasta: String;
	pastaHistorico: String;
	inscricaoEstadual: String;
	codigoBarras: String;

    constructor() {  
        this.id = 0;
        this.dataCadastro = '';
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