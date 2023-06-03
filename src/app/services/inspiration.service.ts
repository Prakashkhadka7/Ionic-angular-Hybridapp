import { Injectable } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { ProfilepopoverComponent } from '../shared/components/profilepopover/profilepopover.component';

@Injectable({
  providedIn: 'root',
})
export class InspirationService {
  constructor(
    private alertController: AlertController,
    public popoverController: PopoverController
  ) {}

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  getInspirations() {
    return sessionStorage.getItem('inspirationList');
  }

  createInspiration(data) {
    let InspirationList = sessionStorage.getItem('inspirationList')
      ? JSON.parse(sessionStorage.getItem('inspirationList'))
      : [];
    InspirationList.push(data);
    sessionStorage.setItem('inspirationList', JSON.stringify(InspirationList));
  }

  updateInspiration(id, data) {
    let InspirationList = sessionStorage.getItem('inspirationList')
      ? JSON.parse(sessionStorage.getItem('inspirationList'))
      : [];
    InspirationList.push(data);

    const index = InspirationList.findIndex((item) => item.id === id);
    if (index !== -1) {
      InspirationList[index] = data;
    }
    sessionStorage.setItem('inspirationList', JSON.stringify(InspirationList));
  }

  getInspirationDetails(id: number) {
    let InspirationList = sessionStorage.getItem('inspirationList')
      ? JSON.parse(sessionStorage.getItem('inspirationList'))
      : [];
    return InspirationList.find((x: any) => x.id == id);
  }

  deleteInspiration(id) {
    let InspirationList = sessionStorage.getItem('inspirationList')
      ? JSON.parse(sessionStorage.getItem('inspirationList'))
      : [];
    const index = InspirationList.findIndex((item) => item.id === id);
    if (index !== -1) {
      InspirationList.splice(index, 1);
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ProfilepopoverComponent,
      cssClass: 'my-custom-class',
      showBackdrop: false,
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
  }
}
