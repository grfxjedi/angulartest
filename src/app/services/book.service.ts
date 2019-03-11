import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';


@Injectable()
export class BookService {
	private url = 'https://private-8479aa-angulartest16.apiary-mock.com/book/1234567';

	constructor( private httpClient: HttpClient ) {}

	getBook( queryTitle: string ): Observable<any> {
		return this.httpClient.get( 'https://private-8479aa-angulartest16.apiary-mock.com/book/' + queryTitle )
			.map( res => res || [] );
	}

}
