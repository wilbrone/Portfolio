import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  durationInSec = 2;

  constructor(private fb: FormBuilder, private db: AngularFirestore, private createMessage: CreateService, private snackBar: MatSnackBar) {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value

    this.createMessage.saveMessage(this.form.value);
    const names = this.form.get('fullname').value;

    this.form.reset();
    this.snackBar.open('Thank you ' + names + ', for reaching out. I will get back to you soon.', {
      duration: 2000,
    });
  }

  // COME BACK AND RESTRUCTURE THIS SECTION
  ngOnInit() {
  }

}
