import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User{
  constructor(
    public name: string,
    public email: string,
    public phone: string,     
  ){}
}

@Injectable()
export class FetchService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient:HttpClient) { }

  public fetchUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.serviceUrl);   
  }
}
