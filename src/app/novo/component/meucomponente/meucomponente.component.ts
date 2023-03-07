import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meucomponente',
  templateUrl: './meucomponente.component.html',
  styleUrls: ['./meucomponente.component.scss']
})
export class MeucomponenteComponent implements OnInit {
  //ATRIBUTOS

  private nome: string;
  anoNascimento: number; //public e padrão

  //CONSTRUCTOR
  constructor() {
    this.nome = "Fulano da Silva"
    this.anoNascimento = 2004
  }

  //COMPORTAMENTO AÇÕES
    idade (): number{
      return 2023- this.anoNascimento;
    }

    ngOnInit(): void{
      console.log("Nome:" + this.nome);
      console.log("Idade:" + this.idade());
    }
  }


