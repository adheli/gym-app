import { CreateExercisePage } from './../create-exercise/create-exercise';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExercisePage } from './exercise';

@NgModule({
  declarations: [
    ExercisePage,
    CreateExercisePage,
  ],
  imports: [
    IonicPageModule.forChild(ExercisePage),
    IonicPageModule.forChild(CreateExercisePage),
  ],
  exports: [
    ExercisePage,
    CreateExercisePage,
  ]
})
export class ExercisePageModule {}
