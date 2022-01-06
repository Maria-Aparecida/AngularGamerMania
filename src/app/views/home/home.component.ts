import { Component, OnInit } from '@angular/core';
import { Promocao } from 'src/app/models/promocao';
import { PromocaoService } from 'src/app/services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaPromocao = [] as Promocao[];
  promocaoForm = {
    titulo: "Promocao Extra",
    descricao: "Descricao da promocao Extra"
  }


  constructor(private promocaoService: PromocaoService) { }

  ngOnInit(): void {
    this.carregarPromocao()
  }
  carregarPromocao(){
    this.promocaoService.getPromocao().subscribe((promocaoRecebidas:Promocao[]) => {
      this.listaPromocao = promocaoRecebidas;
      console.log(this.listaPromocao)
    })
  }
  salvarPromocao(){
    this.promocaoService.postPromocao(this.promocaoForm).subscribe(() =>{
      this.carregarPromocao();
    })
  }
}
