import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

    items: any;
    editarItem: any = {
        name: ''
    };
    constructor(private conexion: ConexionService) {
        this.conexion.listaItem().subscribe(data => {
            this.items = data;
        });
    }

    ngOnInit(): void {
    }

    eliminar(item: string) {
        this.conexion.eliminarItem(item);
    }

    editar(item){
        this.editarItem = item;
    }

    update(item){
        this.conexion.updateItem(this.editarItem, item);
    }
}
