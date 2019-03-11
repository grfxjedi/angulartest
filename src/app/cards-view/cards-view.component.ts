import { Component, ViewEncapsulation } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component( {
	selector: 'cards-view',
	templateUrl: 'cards-view.component.html',
	styleUrls: [ 'cards-view.component.css' ],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('bounce', [transition('* => *', useAnimation(bounce))])
	],

} )

export class CardsViewComponent {
	theStore = this.store;
	cards$: Observable<any> = this.store.select( selectAll );

	bounce: any;

	constructor( private store: Store<any> ) {}

	ngOnInit() {
		this.store.dispatch( { type: '[Book API] Load Book' } );
	}
}

export interface ApplicationState {
	current: number[];
	book: object;
}

export interface AppState {
	application: ApplicationState;
}

export const selectApplication = ( state: AppState ) => state.application;

export const selectAll = createSelector(
	selectApplication,
	( app: ApplicationState ) => {
//		return app.book;
		return app;
	}
);

