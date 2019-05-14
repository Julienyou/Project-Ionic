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

  constructor() {}

  getJobs(): Job[] {
    return this.jobs;
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
