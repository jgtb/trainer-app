import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AulaProvider {

  constructor(public http: HttpClient) {}

}
