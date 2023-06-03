import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfilepopoverComponent } from './components/profilepopover/profilepopover.component';

@NgModule({
  declarations: [ProfilepopoverComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports: [ProfilepopoverComponent],
})
export class SharedModule {}
