import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { User } from './fetch.service';
import { FetchService } from './fetch.service';

export class UserDataSource extends DataSource<User> {
    constructor(private fetchService:FetchService) {
      super();
    }
    connect(): Observable<User[]> {
      return this.fetchService.fetchUsers();
    }
    disconnect() {}
}