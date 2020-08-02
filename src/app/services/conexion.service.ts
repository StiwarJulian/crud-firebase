import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
    providedIn: 'root'
})
export class ConexionService {
    private itemDoc: AngularFirestoreDocument<Item>;
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
    constructor(private afs: AngularFirestore) {
        this.itemsCollection = afs.collection<Item>('items');
        this.items = this.itemsCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Item;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    listaItem() {
        return this.items;
    }

    agregarItem(item: Item) {
        const id = this.afs.createId();
        this.itemsCollection.doc(id).set(item);
        // this.itemsCollection.add(item);
    }

    eliminarItem(item: string) {
        this.itemDoc = this.afs.doc<Item>('items/' + item);
        this.itemDoc.delete();
    }

    updateItem(editarItem, item) {
        this.itemDoc = this.afs.doc<Item>('items/' + item);
        this.itemDoc.update(editarItem);
    }
}
