import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';
import { ListPage } from './../list/list';

import { ExerciseModel } from './../../model/exercise';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the CreateExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-exercise',
  templateUrl: 'create-exercise.html',
})
export class CreateExercisePage {

  public exercise: ExerciseModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storageProvider: StorageProvider) {
    this.exercise = new ExerciseModel();
  }

  ionViewDidLoad() {
    this.exercise = new ExerciseModel();
  }

  saveExercise() {
    const exerciseJson = JSON.stringify(this.exercise);
    console.log(exerciseJson);

    this.storageProvider.saveInStorage(exerciseJson);
    this.navCtrl.push(ListPage);
  }

  goHome() {
    this.exercise = new ExerciseModel();
    this.navCtrl.push(HomePage);
  }
}
