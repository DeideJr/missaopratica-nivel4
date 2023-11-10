export class Livro {
    codigo: number;
  titulo: string;
  autores: string[];
  resumo: string;
  codEditora: number;
  autoresForm: string;

  constructor(
    codigo: number = 0,
    titulo: string = '',
    autores: string[] = [],
    resumo: string = '',
    codEditora: number = 0,
    autoresForm: string = ''
  ) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autores = autores;
    this.resumo = resumo;
    this.codEditora = codEditora;
    this.autoresForm = autoresForm;
    }
  }
  export default Livro;