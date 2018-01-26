import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AvaliacaoProvider {

  constructor(public http: HttpClient) {}

}
