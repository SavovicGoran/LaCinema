import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../security/authentication.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  
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
  edit(f: any) {
    this.film = f;
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

}
