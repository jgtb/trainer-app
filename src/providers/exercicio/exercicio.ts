import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ExercicioProvider {

  constructor(public http: HttpClient) {}

}
