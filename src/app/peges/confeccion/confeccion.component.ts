import { Component, OnInit } from '@angular/core';
import { LocalService } from '../../shared/service/local.service';
import { Variables } from './utils/variables';


@Component({
  selector: 'app-confeccion',
  templateUrl: './confeccion.component.html',
  styleUrls: ['./confeccion.component.css']
})
export class ConfeccionComponent implements OnInit {

  variables = new Variables();

  constructor(private localService: LocalService) { }

  ngOnInit(): void {

  }
}
