import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/componentes/cadastro/cadastro.service';
import { Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {
  cadastro: Cadastro = {
    usuario: '',
    senha: ' '
  }

   constructor() { }

  ngOnInit(): void {
  }

  

 

}
