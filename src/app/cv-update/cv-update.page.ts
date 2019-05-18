import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { CvService } from 'src/app/services/cv.service';
import { Job } from 'src/app/class/job';
import { ActivatedRoute, Router} from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cv-update',
  templateUrl: './cv-update.page.html',
  styleUrls: ['./cv-update.page.scss'],
})
export class CvUpdatePage implements OnInit {
  jobs : Job[];
  cv;
  id : number;

  constructor(private JobService:JobService, 
              private CvService:CvService,
              private route:ActivatedRoute, 
              private router:Router,
              public toastController: ToastController) { }

  ngOnInit() {
    this.getJobs()
    this.getCv()
  }
  getJobs() {
    this.jobs = this.JobService.getJobs()
  }
  getCv() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cv = this.CvService.getCv(this.id);
  }
  onSubmit() {
    this.CvService.updateCv(this.cv);

    this.showToast();

    this.router.navigate(['/cvs']);
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Your CV has been saved.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

}
