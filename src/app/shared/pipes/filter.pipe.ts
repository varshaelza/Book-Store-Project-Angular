import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string, propName:string[]): any[] {
    const result: any=[];
    console.log(value);
    if(!value|| filterString===''||propName.length==0){
      return value;
    }
    value.forEach((a:any)=>{
      console.log(a[propName[0]].trim().toLowerCase().includes(filterString.toLowerCase()));
      if(a[propName[0]].trim().toLowerCase().includes(filterString.toLowerCase()) || a[propName[1]].trim().toLowerCase().includes(filterString.toLowerCase()) ){
        result.push(a);
      }
    });
    console.log(result);
    return result;
  }

}
