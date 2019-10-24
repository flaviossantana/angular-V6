import {NgModule} from "@angular/core";
import {CliqueImediatoDirective} from "./clique-imediato.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CliqueImediatoDirective
  ],
  exports: [
    CliqueImediatoDirective
  ]
})
export class CliqueImediatoModule {

}
