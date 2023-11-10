import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {

    private livros: Array<Livro> = [
        { codigo: 1, titulo: 'Use a Cabeça: Java', autores: ['Bert Bates', 'Kathy Sierra'], resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos(OO) e Java', codEditora: 1, autoresForm: '' },
        { codigo: 2, titulo: 'Java, como Programar', autores: ['Paul Deitel', 'Harvey Deitel'], resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel', codEditora: 2, autoresForm: '' },
        { codigo: 3, titulo: 'Core Java for the Impatient', autores: ['Cay Horstmann'], resumo: 'Modern Java introduces major enhancements that impact the core Java technologies and APIs at the heart of the Java platform. Many old Java idioms are no longer needed, and new features and programming paradigms can make you far more effective. However, navigating these changes can be challenging.', codEditora: 3, autoresForm: '' },
      ];
    

  obterLivros(): Array<Livro> {
    return this.livros;
  }


  incluir(livro: Livro): void {

    const novoCodigo = Math.max(...this.livros.map((l) => l.codigo)) + 1;
    livro.codigo = novoCodigo;

    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((l) => l.codigo === codigo);

    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}