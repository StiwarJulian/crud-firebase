import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ConexionService } from './services/conexion.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})

export class AppComponent {
    faCoffee = faCoffee;
    items: Observable<any[]>;

    constructor(angularFirestore: AngularFirestore, private conexionService: ConexionService) {
        this.items = angularFirestore.collection('items').valueChanges();
    }

    title = 'angular-firebase-crud';
}
