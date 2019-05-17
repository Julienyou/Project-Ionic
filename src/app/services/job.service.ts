import { Injectable } from '@angular/core';
import { Job } from '../class/job';
import { JobsPage } from '../jobs/jobs.page';

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

  /* getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl + "/jobs");
  }
  addJob(job) { */
    /* Send a POST request to the API for adding a particular job thanks to the formed json */
  /*   return this.http.post<any>(this.baseUrl + "/addjob",
    {"job": job});
  } */
}
