import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Component({
  templateUrl: 'foto-detalhe.component.html'
})
export class FotoDetalheComponent implements OnInit{

  constructor(
    private route: ActivatedRoute){
  }


  ngOnInit(): void {
    let fotoid = this.route.snapshot.params.fotoId;
    console.log(fotoid);
  }

}
