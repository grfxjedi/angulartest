import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardsViewComponent } from './cards-view/cards-view.component';
import { BookEffects } from './services/book.effects';
import { BookService } from './services/book.service';
import { saveBook } from './book.reducer';


@NgModule({
	declarations: [ AppComponent, CardsViewComponent ],
	imports: [
		BrowserModule,
		HttpClientModule,
		NgbModule,
		BrowserAnimationsModule,
		StoreModule.forRoot( { application: saveBook } ),
		EffectsModule.forRoot( [ BookEffects ] )
	],
	providers: [ BookService ],
	bootstrap: [ AppComponent ],
})

export class AppModule {}
