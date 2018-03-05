import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ExercisePage } from './../exercise/exercise';
import { ExerciseModel } from './../../model/exercise';
import { StorageProvider } from './../../providers/storage/storage';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  exercises: ExerciseModel[] = new Array();
  type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageProvider: StorageProvider) {
    this.type = navParams.get('type');
  }

  public initView() {
    this.exercises = new Array();

    const lastIndex: number = + this.storageProvider.retrieveFromStorage('lastIndex');

    for (let i = lastIndex; i < 0; i--) {
      const rawExercise = this.storageProvider.retrieveFromStorage('ex'.concat(i.toString()));
      const exercise: ExerciseModel = JSON.parse(rawExercise);

      if (this.type.toLowerCase().match(exercise.tipo)) {
        this.exercises.push(exercise);
      }
    }
  }

  public itemTapped(item: any) {
    this.navCtrl.push(ExercisePage, {
      id: item
    });
  }
}
