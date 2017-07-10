import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; //para manejar excepciones
import 'rxjs/add/operator/do'; //para hacer algo cada vez que llega una request (ej: loggear y ver que llegó.

import { ProductQuantity } from './reportes';
import { ProductCategory } from './reportes';

import { uri } from '../uri/uri';
import { UriService } from '../uri/uri.service';



@Injectable()
export class ReportesService {
    private ROOT_URL : string;//= 'http://localhost:3600/api/';
    private WEB_API_URL_SALE_BY_CATEGORY : string;
    private WEB_API_URL_PRODUCT_QUANTITY : string;
    //Parameters
    private dateFrom : string;
    private dateTo: string;
    private categoryId : number = 1;
    private countRows : number = 1;
    

    constructor(private uriService: UriService, private _httpService: Http) { 
        this.ROOT_URL = this.uriService.URI_API_URL;
        var someDate = new Date();
        var numberOfDaysToAdd = -10;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
        this.dateFrom = someDate.toLocaleDateString();
        this.dateTo = new Date().toLocaleDateString();
        
        this.WEB_API_URL_SALE_BY_CATEGORY = this.ROOT_URL 
                                            +'reports/'
                                            + 'SelesByCategory/'
                                            + this.categoryId +'?'
                                            + 'dateFrom=' + this.dateFrom 
                                            +'&dateTo=' + this.dateTo;
        this.WEB_API_URL_PRODUCT_QUANTITY = this.ROOT_URL 
                                            +'reports/'
                                            + 'SearchProductSale/?dateFrom=' +this.dateFrom 
                                            +'&dateTo=' + this.dateTo 
                                            +'&count=' + this.countRows;
    }
    
    getUrlSalebyCategory(){
        return this.WEB_API_URL_SALE_BY_CATEGORY;
    }

    getUrlProductQuantity(){
        return this.WEB_API_URL_PRODUCT_QUANTITY;
    }

    setParemetersSalebyCategory(dateFrom:string, dateTo:string, categoryId:number){
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.categoryId = categoryId;
        this.updateUrlsSalebyCategory();
        console.log(this.getUrlSalebyCategory());
    }

    setParemetersProductQuantity(dateFrom:string, dateTo:string, countRows:number){
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.countRows = countRows;
        this.updateUrlsProductQuantity();
        console.log(this.getUrlProductQuantity());
    }
    updateUrlsProductQuantity():void {
        this.WEB_API_URL_PRODUCT_QUANTITY = this.ROOT_URL 
                                            +'reports/'
                                            + '/SearchProductSale/?dateFrom=' +this.dateFrom 
                                            +'&dateTo=' + this.dateTo 
                                            +'&count=' + this.countRows;
    }
    updateUrlsSalebyCategory():void {
        this.WEB_API_URL_SALE_BY_CATEGORY = this.ROOT_URL 
                                             +'reports/'
                                            + '/SelesByCategory/'
                                            + this.categoryId +'?'
                                            + 'dateFrom=' + this.dateFrom 
                                            +'&dateTo=' + this.dateTo;
    }
    
    getSaleByCategory(): Observable<Array<ProductCategory>> {
        return this._httpService.get(this.WEB_API_URL_SALE_BY_CATEGORY)
        .map(response =>  response.json())
        .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    getMostProductSale():  Observable<Array<ProductQuantity>> {
         return this._httpService.get(this.WEB_API_URL_PRODUCT_QUANTITY)
        .map((response : Response) => <Array<ProductQuantity>>  response.json())
        .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error|| 'Server error');
    }

    
}