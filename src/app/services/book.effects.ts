import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { BookService } from './book.service';

@Injectable()
export class BookEffects {

	@Effect() loadBook$ = this.actions$
		.pipe(
			ofType( '[Book API] Load Book' ),
			switchMap( () => this.bookService.getBook( 'test' )
				.pipe(
					map( book => (
						{
							type : '[Book API] Book Loaded Success',
							payload : book
						}
					) ),
					catchError( () => of( { type: '[Book API] Book Loaded Error' } ) )
				)
			)
		);

//	@Effect() saveBook$ = this.actions$
//		.pipe(
//			ofType( '[Book API] Book Loaded Success' ),
//			switchMap( query => {
//				console.log ( query );
//				return [];
//			})
//		);

	constructor(
		private actions$: Actions,
		private bookService: BookService,
	) {}
}
