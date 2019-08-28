import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'ap-pesquisa',
  templateUrl: 'pesquisa.component.html'
})
export class PesquisaComponent implements OnInit, OnDestroy {

  @Input() filtro: string;
  @Output() filtroEvent = new EventEmitter();

  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(500))
      .subscribe( (filtro) => {
        this.filtroEvent.emit(filtro);
      });
  }

  onKeyUpFiltro(filtro) {
    this.debounce.next(filtro);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
