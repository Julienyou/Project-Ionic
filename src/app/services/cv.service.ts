import { Injectable } from '@angular/core';
import { Cv } from '../class/cv'
import { Job } from '../class/job'
import { ActivatedRoute, Router} from '@angular/router';
import { CvsJobsPage } from '../cvs-jobs/cvs-jobs.page';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private jobs: Job[] = [
    new Job(1, "Ingénieur en informatique"),
    new Job(2, "Pompier"),
    new Job(3, "Médecin")
  ]

  private cvs: Cv[] = [
    new Cv(1, "J'aime l'informatique", "PHP, Angular, Python", "Ingénieur en informatique", this.jobs[0], "Beard", "Julien", "11/07/1997", "beardjulien@gmail.com", "Strombeek-Bever", "Belgique", "0479225837"),
    new Cv(2, "J'aime le feu", "Maniement de l'eau", "Ingénieur en informatique", this.jobs[1], "Beard", "Julien", "11/07/1997", "beardjulien@gmail.com", "Strombeek-Bever", "Belgique", "0479225837"),
    new Cv(3, "J'aime les malades", "Maitrise de seringues", "Ingénieur en informatique", this.jobs[2], "Beard", "Julien", "11/07/1997", "beardjulien@gmail.com", "Strombeek-Bever", "Belgique", "0479225837")
  ]

  private cvsjobs: Cv[] = []
  private cv: Cv;

  constructor() { }

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCv(id: number) {
    this.cvs.forEach(cv => {
      if (cv.id == id) {
        this.cv = cv;
      }
    })

    console.log(this.cv)
    return this.cv;
  }

  getCvsJobs(id: number) {
    this.cvsjobs = []
    this.cvs.forEach(cv => {
      if (cv.job.id == id) {
        this.cvsjobs.push(cv);
      }      
    });

    return this.cvsjobs;
  }

  updateCv(cv: Cv) {
    this.cvs.push(cv);
  }
  
  deleteCv(id) {
    let i=0;
    for (i; i<this.cvs.length; i++) {
      if (this.cvs[i].id == id) {
        this.cvs.splice(i, 1);
      }
    }
  }

  /* getCvsJobs() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.CvService.getCvsJobs(this.id)
        .subscribe(data => { this.cvs = data;})
  } */
}
