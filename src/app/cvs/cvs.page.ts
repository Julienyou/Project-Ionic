import { Component, OnInit } from '@angular/core';
import { Cv } from '../class/cv';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router} from '@angular/router';

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

  constructor(private CvService: CvService, private router:Router) { }

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

    this.router.navigate(['/cvs']);
  }

}
