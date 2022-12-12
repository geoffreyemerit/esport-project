import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { AbstractApi } from './abstractapi.service';

@Injectable({
  providedIn: 'root',
})
export class MemberService extends AbstractApi<Person> {
  base_service = 'teams/';
}
