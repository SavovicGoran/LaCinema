import { Component, OnInit } from '@angular/core';
import { Response, RequestOptions,
         Headers } from '@angular/http';

import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenticationService } from 'app/security/authentication.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  filmovi: any[];

  zanrovi: any[];

  film: any = {
    naslov: '',
    radnja: '',
    zanr: ''
  }

  title: string = '';
 genre: string = '';

  zanr: any[];

  currentPage = 0;

  numberOfPages: number;


  ngOnInit(): void {
    this.loadData();
    this.loadZanr();
  }



  constructor(private authenticationService: AuthenticationService, private http: HttpClient) {
  }

  loadData() {
    const params = new HttpParams()
      .set('page', this.currentPage.toString())
      .set('size', '5');
    this.http.get('api/filmovi', { params }).subscribe( data => {
    // this.http.get(`api/computer-parts?page=${this.currentPage}&size=${5}`).subscribe( data => {
      this.filmovi = data['content'] as any[];
      this.numberOfPages = data['totalPages'];
      this.reset();
    });
  }

  loadZanr(){
    this.http.get('api/zanrovi').subscribe( data => {
      this.zanrovi = data as any[];
    });
  }

  filter(){
    const params = new HttpParams()
    .set('title', this.title)
    .set('genre', this.genre)
    this.http.get('api/filmovi', {params}).subscribe( data => {
    this.filmovi = data as any[];
    });
    }


  reset() {
    this.film = {
      naslov: '',
      radnja: '',
      zanr: ''
    };
  }

  changePage(x: number) {
    if (this.currentPage + x >= 0 && this.currentPage + x < this.numberOfPages) {
      this.currentPage += x;
      this.loadData();
    }
  }

  hasRole(role: string): boolean {
    return this.authenticationService.hasRole(role);
  }
}
