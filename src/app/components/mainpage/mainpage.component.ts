import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { AngularFire } from 'angularfire2';

import { AngularFirestore } from '@angular/fire/firestore';

import { CreateService } from '../../services/messages/create.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  form = new FormGroup({
    fullname:  new FormControl(''),
    email:  new FormControl(''),
    comment:  new FormControl(''),
  });

  constructor(private fb: FormBuilder, private db: AngularFirestore, private createMessage: CreateService,) {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.form.value);
    console.log(this.form.get('fullname').value);

    this.createMessage.saveMessage(this.form.value);
  }

  // COME BACK AND RESTRUCTURE THIS SECTION
  ngOnInit() {
  }

}
