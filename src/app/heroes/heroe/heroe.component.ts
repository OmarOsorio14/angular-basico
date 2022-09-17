import {Component} from '@angular/core';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
})
export class HeroeComponent{
	nombre: string = 'ironman'
	edad: number = 30

	get nombreCapitalizado(): string{
		return this.nombre.toUpperCase()
	}

	obtenerNombre():string{
		return `${this.nombre} - ${this.edad}`
	}

	cambiarNombre(){
		this.nombre = 'spiderman';
	}
	cambiarEdad(){
		this.edad =  25;
	}
}