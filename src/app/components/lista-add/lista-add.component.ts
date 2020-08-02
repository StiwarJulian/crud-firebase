import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
    selector: 'app-lista-add',
    templateUrl: './lista-add.component.html',
    styleUrls: ['./lista-add.component.sass']
})
export class ListaAddComponent implements OnInit {

    item: any = {
        name: ''
    };

    constructor(private conexionService: ConexionService) { }

    ngOnInit(): void {
    }

    agregar(){
        this.conexionService.agregarItem(this.item);
    }
}
