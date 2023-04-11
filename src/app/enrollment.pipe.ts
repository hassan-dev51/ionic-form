import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enrollment'
})
export class EnrollmentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
