import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'redux-app';
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.store.subscribe((state) => {
    //   this.contador = state.contador;
    // });
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  ngOnInit() {}

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    this.store.dispatch(actions.decrementar());
  }
}
