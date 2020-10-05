import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  // messagesRef: AngularFireObject<any>;

  constructor(private db: AngularFirestore) { }

  saveMessage(data) {
    console.log(data);
    return this.db.collection('messages').add({
      name: data.fullname,
      email: data.email,
      message: data.comment
    });
  }
}


