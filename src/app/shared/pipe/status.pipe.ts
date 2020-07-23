import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appStatus'
})

export class StatusPipe implements PipeTransform {

    constructor() {}

    /***
     * Método que retorna status de ativo ou inativo de acordo com o valor recebido.
     *
     * @param status: boolean
     * @return string
     */
    public transform(status: boolean): string {
        console.log('Estou visualizando se não teve alteração no status');
        return status ? 'Ativo' : 'Inativo';
    }
}
