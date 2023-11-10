import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir(): void {
    this.livro.autores = this.livro.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }

  obterNome(codEditora: number): string {
    return this.servEditora.getNomeEditora(codEditora);
  }
}