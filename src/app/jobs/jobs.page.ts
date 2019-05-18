import { Component, OnInit } from '@angular/core';
import { Job } from '../class/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  jobs : Job[]

  constructor(private JobService: JobService) { }

  ngOnInit() {
    this.getJobs() 
  }
  getJobs() {
    this.jobs = this.JobService.getJobs();
  }

}
