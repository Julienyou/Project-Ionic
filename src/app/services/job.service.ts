import { Injectable } from '@angular/core';
import { Job } from '../class/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [
    new Job(1, "Ingénieur en informatique"),
    new Job(2, "Pompier"),
    new Job(3, "Médecin")
  ]

  private jobID: Job;

  constructor() {}

  getJobs(): Job[] {
    return this.jobs;
  }

  getJob(id: number) : Job {
    this.jobs.forEach(job => {
      if(job.id == id) {
        this.jobID = job;
      }
    })

    return this.jobID;
  }
}
