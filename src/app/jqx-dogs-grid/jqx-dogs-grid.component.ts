import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-jqx-dogs-grid',
  templateUrl: './jqx-dogs-grid.component.html',
  styleUrls: ['../../styles.css'],
  encapsulation: ViewEncapsulation.None
})
export class JqxDogsGridComponent implements AfterViewInit, OnInit {
  @ViewChild('goodBoyGrid') goodBoyGrid?: jqxGridComponent;
  constructor(
    private router:Router
  ) {  }
  userDisplayName = sessionStorage.getItem('loggedUser');
  dogs: string | undefined;
  dogRow: number | undefined;
  ngOnInit() {
    this.userDisplayName;
  }
  goodBoyGridOnRowSelect(event: any): void {
    const args = event.args;
    let selectedRowIndex = args.rowindex;
    let value = this.goodBoyGrid?.getrowdata(selectedRowIndex);
    this.dogs = value;
    this.dogRow = selectedRowIndex;
    console.log(this.dogs);
  }

  columns = [
		{text: 'Id', datafield: 'id'},
		{text: 'Dog Breeds', datafield: 'breed'},
    {text: 'Height Min', datafield: 'heightMin'},
    {text: 'Height Max', datafield: 'heightMax'},
    {text: 'Weight Min', datafield: 'weightMin'},
    {text: 'Weight Max', datafield: 'weightMax'},
  ];
  title = 'Dog Breeds';

  source = new jqx.dataAdapter({
		localData: [
		  {id: 1, breed: 'Labrador Retriever', heightMin: 21.5, heightMax: 24.5, weightMin: 55, weightMax: 80},
		  {id: 2, breed: 'German Shepherd', heightMin: 24, heightMax: 26, weightMin: 50, weightMax: 90},
		  {id: 3, breed: 'Golden Retriever', heightMin: 21.5, heightMax: 24, weightMin: 55, weightMax: 75},
		  {id: 4, breed: 'French Bulldog', heightMin: 11, heightMax: 13, weightMin: 28, weightMax: 30},
		  {id: 5, breed: 'Bulldogs', heightMin: 15, heightMax: 16, weightMin: 50, weightMax: 52},
		  {id: 6, breed: 'Poodles', heightMin: 10, heightMax: 11, weightMin: 4, weightMax: 6},
		  {id: 7, breed: 'Beagles', heightMin: 13, heightMax: 15, weightMin: 20, weightMax: 22},
		  {id: 8, breed: 'Rottweilers', heightMin: 22, heightMax: 25, weightMin: 125, weightMax: 135},
		  {id: 9, breed: 'Pointers', heightMin: 21, heightMax: 25, weightMin: 45, weightMax: 70},
		  {id: 10, breed: 'Pembroke Welsh Corgis', heightMin: 10, heightMax: 12, weightMin: 12, weightMax: 13},
		  {id: 11, breed: 'Dachshunds', heightMin: 8, heightMax: 9, weightMin: 16, weightMax: 32},
		  {id: 12, breed: 'Yorkshire Terrier', heightMin: 7, heightMax: 8, weightMin: 7, weightMax: 9},
		  {id: 13, breed: 'Australian Shepherds', heightMin: 18, heightMax: 23, weightMin: 40, weightMax: 65},
		  {id: 14, breed: 'Boxers', heightMin: 23, heightMax: 25, weightMin: 65, weightMax: 80},
		  {id: 15, breed: 'Siberian Huskies', heightMin: 20, heightMax: 23.5, weightMin: 35, weightMax: 60},
		  {id: 16, breed: 'Cavalier King Charles Spaniels', heightMin: 12, heightMax: 13, weightMin: 13, weightMax: 18},
		  {id: 17, breed: 'Great Danes', heightMin: 30, heightMax: 32, weightMin: 135, weightMax: 155},
		  {id: 18, breed: 'Miniature Schnauzers', heightMin: 12, heightMax: 14, weightMin: 11, weightMax: 20},
		  {id: 19, breed: 'Doberman Pinchers', heightMin: 26, heightMax: 28, weightMin: 75, weightMax: 100},
		  {id: 20, breed: 'Shih Tzu', heightMin: 9, heightMax: 10.5, weightMin: 9, weightMax: 16}
		]
	 });

   logout(){
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/LogIn');
  }

  ngAfterViewInit() {
  }
}
