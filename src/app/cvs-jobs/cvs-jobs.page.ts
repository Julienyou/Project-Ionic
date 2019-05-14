import { Component, OnInit } from '@angular/core';
import { Cv } from '../class/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cvs-jobs',
  templateUrl: './cvs-jobs.page.html',
  styleUrls: ['./cvs-jobs.page.scss'],
})
export class CvsJobsPage implements OnInit {
  private cvs: Cv[];
  private id: number;

  sliderConfig = {
    spaceBetween: -10,
    centeredSlides: true,
    slidesPerView: 1.2
  }

  constructor(private CvService: CvService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getCvsJobs();
  }
  
  getCvsJobs() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cvs = this.CvService.getCvsJobs(this.id);
  }

  delete(id: number) {
    this.CvService.deleteCv(id);

    let i=0;
    for (i; i<this.cvs.length; i++) {
      if (this.cvs[i].id == id) {
        this.cvs.splice(i, 1);
      }
    }

    this.router.navigate(['/cvs-jobs/', id]);
  }

}
