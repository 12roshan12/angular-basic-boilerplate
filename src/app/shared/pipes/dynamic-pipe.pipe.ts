import { CurrencyPipe, DatePipe } from '@angular/common';
import { Injector, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamicPipe'
})
export class DynamicPipePipe implements PipeTransform {

  public constructor(private injector: Injector) {}

  transform(value: any, pipeToken: any): any {
    const MAP: any = {'date': DatePipe, 'currency': CurrencyPipe};
    if ( pipeToken ) {
      if ( MAP.hasOwnProperty(pipeToken.name) ) {
        var pipeClass = MAP[pipeToken.name];
        var pipe = this.injector.get(pipeClass);

        if ( Array.isArray(pipeToken.args) ) {
          return pipe.transform(value, ...pipeToken.args);
        } else {
          return pipe.transform(value, pipeToken.args);
        }
      }
      // console.log('Args', pipeToken);
    }
    return value;
  }

}
