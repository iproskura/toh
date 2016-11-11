import { PipeTransform, Pipe} from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform{
  transform(value:any, args : any){
    return moment(value).fromNow();
  }
}
