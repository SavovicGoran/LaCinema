import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmovi',
  templateUrl: './filmovi.component.html',
  styleUrls: ['./filmovi.component.css']
})
export class FilmoviComponent implements OnInit {


  film: any = {
    id: null,
    naslov: '',
    radnja: '',
    zanr: {},
    projekcije: []
  }
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.http.get(`api/filmovi/${id}`).subscribe(response => {
        this.film = response as any;
      });
    });
  }

  ngOnInit() {
  }

}

