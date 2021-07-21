import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  status = false;
  showInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  /***
   * Método que retorna status de ativo ou inativo de acordo com o valor recebido.
   *
   * @param status: boolean
   * @return string
   */
  public visualizarStatus(status: boolean): string {
    console.log('Estou visualizando se não teve alteração no status');
    return status ? 'Ativo' : 'Invalido';
  }

  /***
   * Método que inverte o valor do status
   *
   * @return void
   */
  public changeValueStatus(): void {
    this.status = !this.status;
  }

  /***
   * Método que inverte o valor do showInfo
   *
   * @return void
   */
  public changeValueShowInfo(): void {
    this.showInfo = !this.showInfo;
  }

}
