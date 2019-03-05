import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

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

  constructor(private authenticationService: AuthenticationService, private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
    this.loadZanr();
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

  filter(){
    const params = new HttpParams()
    .set('title', this.title)
    .set('genre', this.genre)
    this.http.get('api/filmovi', {params}).subscribe( data => {
    this.filmovi = data as any[];
    });
    }

  loadZanr(){
    this.http.get('api/zanrovi').subscribe( data => {
      this.zanrovi = data as any[];
    });
  }
  reset() {
    this.film = {
      naslov: '',
      radnja: '',
      zanr: ''
    };
  }
  save() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (this.film.id === undefined) {
      this.http.post('api/filmovi', JSON.stringify(this.film), {headers}).subscribe((data: any) => {
        this.loadData();
      });
    } else {
      this.http.put(`api/filmovi/${this.film.id}`, JSON.stringify(this.film), {headers}).subscribe((data: any) => {
        this.loadData();
    
      });
    }
  }
  delete(f: any) {
    this.http.delete(`api/filmovi/${f.id}`).subscribe(data =>{
      console.log(data);
      this.loadData();
    });
  }
  changePage(x: number) {
    if (this.currentPage + x >= 0 && this.currentPage + x < this.numberOfPages) {
      this.currentPage += x;
      this.loadData();
    }
  }
  byId(item1: any, item2: any) {
    if ( !item1 || !item2 ) {
      return false;
    }
    return item1.id === item2.id;
  }

}
