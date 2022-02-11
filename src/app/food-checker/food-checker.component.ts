import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OpenFoodService } from '../open-food.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  temp_row: any;
}

@Component({
  selector: 'app-food-checker',
  templateUrl: './food-checker.component.html',
  styleUrls: ['./food-checker.component.css']
})
export class FoodCheckerComponent implements OnInit {
  public foodSearchForm!: FormGroup;
  code: any;


  constructor(
    private formBuilder: FormBuilder,
    private openFoodService: OpenFoodService,
    public dialog: MatDialog
  ) {}

  public foodData: any;

  checkFood(): void {
    if (this.foodSearchForm.valid) {
      this.openFoodService
        .getFood(this.foodSearchForm.value.food)
        .subscribe((data: any) => (this.foodData = data));
        this.openFoodService
        .getFood(this.foodSearchForm.value.food)
        .subscribe((data: any) => console.log(data));
    }
  }

  isShowDiv = true;

  toggleDiv() {
    this.isShowDiv = !this.isShowDiv;
  }


  ngOnInit(): void {
    this.foodSearchForm = this.formBuilder.group({
      food: ['', Validators.required],
    });
  }

  openDialog(row: any): void {
    console.log(row);

    const dialogRef = this.dialog.open(DialogDataExampleDialog, {
      width: '550px',
      height: 'auto',
      data: row,
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
    })

  }
}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog_info_food.html',
  styleUrls: ['dialog_info_food.css'],
})
export class DialogDataExampleDialog {

  fromPage: any;

  constructor(
    public dialogRef: MatDialogRef<DialogDataExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("thisisatest", data.food.id)
    this.fromPage = data.food;
  }

  ngOnInit(){}

 
}
