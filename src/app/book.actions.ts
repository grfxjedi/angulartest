import { Action } from '@ngrx/store';

export enum ActionTypes {
	SAVE = '[Book] Save',
	LOAD = '[Book] Load'
}

export class LoadAction implements Action {
	readonly type = ActionTypes.LOAD;

	constructor( public payload ) {}
}

export class SaveAction implements Action {
	readonly type = ActionTypes.SAVE;

	constructor( public payload ) {}
}

export type Actions
	= LoadAction
	| SaveAction;
