import { Injectable } from '@angular/core';
import { Cv } from '../class/cv'
import { Job } from '../class/job'
import { ActivatedRoute, Router} from '@angular/router';

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

  id;

  constructor(private route:ActivatedRoute) { }

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvsJobs() {
    this.id = this.route.snapshot.paramMap.get('id'); 

    this.cvs.forEach(cv => {
      if (cv.job == this.jobs[this.id]) {

      }      
    });
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
