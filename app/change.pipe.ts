import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(value: string, isLogged:boolean): any {
    if(isLogged==true){
      return value;
    }
    else{
      return "No Patient";
    }
    
    
  }

}
