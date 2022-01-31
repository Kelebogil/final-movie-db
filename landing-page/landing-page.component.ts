import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { Movie } from 'src/app/models/movie';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  // movies: Movie[] | any;
  latestMovies: any = [];
  currentMovie: Movie = {};
  currentIndex=-1;
  getLatest: any;
  page= -1;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe(
    (data: any) => {
      this.latestMovies = data.results;
      console.log(data.results);
    });
  }
  setActive(latestMovies: Movie, index: number): void {
    this.currentMovie = latestMovies;
    this.currentIndex = index;
  }
  back(){
    this.page = this.page - 1;
    this.getMovies()
  }
  nextPage(){

    this.page = this.page + 1;
    console.log("this is page :"+this.page)
    this.getMovies();
  }
 
}
