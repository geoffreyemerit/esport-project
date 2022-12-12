import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/models/person';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css'],
})
export class PersonViewComponent implements OnInit {
  idPerson?: number;
  idTeam?: number;
  person: Person;
  link?: string;
  personForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private fb: FormBuilder
  ) {
    this.person = new Person();
    this.personForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      nickname: ['', Validators.required],
      role: ['', Validators.required],
      country: ['', Validators.required],
    });

    this.route.url.subscribe((url) => {
      this.idTeam = parseInt(url[1].path);
      this.idPerson = parseInt(url[3].path);
      this.link = url[2].path;
    });
  }

  ngOnInit(): void {
    /** Récupère le membre selectionnée */
    this.memberService.base_service = `teams/${this.idTeam}/${this.link}/`;
    this.memberService.getById(this.idPerson!).subscribe((data) => {
      let personSelected: Person = data;
      this.person = personSelected;
      this.updateForm();
    });
  }

  updateForm() {
    this.personForm.patchValue(this.person);
  }

  showMe() {
    console.log(this.personForm.value);
  }
}
