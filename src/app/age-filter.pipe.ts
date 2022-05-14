import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageFilter'
})
export class AgeFilterPipe implements PipeTransform {

  transform(value: Date): any {
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    let r_age:any = age;
    if(r_age >= 0){
      
    }else{r_age = "";}
    return r_age;
  }

}
