import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PeopleService {
  constructor() {}

  getPeople() {
    return Observable.of([
      {
        id: '1',
        name: 'Ashish',
        surname: 'Bakliwal',
        twitter: 'ashishbakliwal8'
      }
    ]);
  }
}
