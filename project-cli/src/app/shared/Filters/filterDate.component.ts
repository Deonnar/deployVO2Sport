import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vo2-filterDate', 
    templateUrl: './filterDate.component.html',
    styleUrls: ['./filterDate.component.css']
})

export class filterDateComponent {
   

    @Input()
    dataFilter: filterDate;

    @Output()
    filterClicked: EventEmitter<filterDate> = new EventEmitter<filterDate>();

    constructor(){ 
        
    }
    onfilter(): void {
        this.filterClicked.emit(this.dataFilter);
    }
}

export class filterDate {
    dateFrom: string; 
    dateTo: string;
    showCboCategories: Boolean = true;
    showTxtNumber: Boolean = true;
    txtNumberValue: number = 1;
    cboCategoryValue: number = 1;

    constructor(showCboCategories: boolean, showTxtNumber:boolean){ 
        var someDate = new Date();
        var numberOfDaysToAdd = -10;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
        this.dateFrom = someDate.toLocaleDateString();
        this.dateTo = new Date().toLocaleDateString();
        this.showCboCategories = showCboCategories;
        this.showTxtNumber = showTxtNumber;
    }

    getDateFrom():string{
        return this.dateFrom;
    }

    getDateTo():string{
        return this.dateTo;
    }

    getTxtNumber():number{
        return this.txtNumberValue;
    }

    getCategory(): number {
         return this.cboCategoryValue;
    }

    setShowCboCategories(value : boolean){
        this.showCboCategories = value;
    }

    setShowTxtNumber(value : boolean){
        this.showTxtNumber = value;
    }
}
