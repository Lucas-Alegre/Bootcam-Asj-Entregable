import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RubroService } from 'src/app/services/rubro/rubro.service';

@Component({
  selector: 'app-editar-rubro',
  templateUrl: './editar-rubro.component.html',
  styleUrl: './editar-rubro.component.css'
})
export class EditarRubroComponent implements OnInit {
  nombre: String = "";
  private modalService = inject(NgbModal);
  rubroId: any;
  rubro: any = {}

  constructor(private rubroServices: RubroService, private route: Router, private _activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.paramMap.subscribe(data => {
      this.rubroId = data.get('id');
    })
    this.rubroServices.getById(this.rubroId).subscribe(res => {
      this.rubro = res;
      this.nombre = this.rubro.nombre;

    })
  }

  openScrollableContent(longContent: TemplateRef<any>) {
    this.modalService.open(longContent, { scrollable: true });
  }

  enviar(form: any, longContent: TemplateRef<any>): void {
    const newRubro = {
      nombre: this.nombre,
      habilitado: 1,
    }
    this.openScrollableContent(longContent)
    this.rubroServices.put(newRubro, this.rubroId).subscribe((data: any) => {
      console.log(data)
    }, (error) => {
      this.route.navigate(['/', 'rubros'])
    });
  }

  limpiar() {
    this.nombre = "";
  }
}
