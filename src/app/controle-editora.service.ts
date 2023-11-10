import { Injectable } from '@angular/core';
import { Editora } from './editora';

Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { CodEditora: 1, nome: 'Alta Books' },
    { CodEditora: 2, nome: 'Pearson' },
    { CodEditora: 3, nome: 'Addison Wesley' },
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.CodEditora === codEditora);

    return editora ? editora.nome : 'Editora não encontrada';
  }
}