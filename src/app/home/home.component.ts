import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogContentComponent} from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  toggleDialog() {
      this.dialog.open(DialogContentComponent, {});
  }

}
