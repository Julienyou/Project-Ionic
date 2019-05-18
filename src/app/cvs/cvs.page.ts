import { Component, OnInit } from '@angular/core';
import { Cv } from '../class/cv';
import { CvService } from '../services/cv.service';
import { Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.page.html',
  styleUrls: ['./cvs.page.scss'],
})
export class CvsPage implements OnInit {
  cvs: Cv[]

  sliderConfig = {
    spaceBetween: -10,
    centeredSlides: true,
    slidesPerView: 1.2
  }

  constructor(private CvService: CvService, private router:Router, public toastController: ToastController) { }

  ngOnInit() {
    this.getCvs()
  }

  getCvs() {
    this.cvs = this.CvService.getCvs();
  }

  delete(id: number) {
    this.CvService.deleteCv(id);

    let i=0;
    for (i; i<this.cvs.length; i++) {
      if (this.cvs[i].id == id) {
        this.cvs.splice(i, 1);
      }
    }

    this.showDeleteToast();

    this.router.navigate(['/cvs']);
  }

  async showDeleteToast() {
    const toast = await this.toastController.create({
      message: 'Your CV has been deleted.',
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }
}
