import { Action } from '@ngrx/store';
import * as Book from './book.actions';

export interface State {
	current: number[];
	book: object;
}

export const initialState: State = {
	current: [ 0, 1 ],
	book: {
		children: []
	}
};

export function saveBook( state = initialState, action: Book.Actions ): State {
	if ( action.payload ) {
		state.book = action.payload;
	}

	switch ( action.type ) {
		case Book.ActionTypes.SAVE: {
			return state;
		}

		default: {
			return state;
		}
	}
}
