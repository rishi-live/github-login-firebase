import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  // githubUrl = `https://api.github.com/users/`;
  // repoUrl = `https://api.github.com/users/rishi-live/repos`
  constructor(private http: HttpClient) { }


  getUserDetails(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}`);

  }
  getRepos(repoUrl: string) {
    return this.http.get(repoUrl);

  }





}
