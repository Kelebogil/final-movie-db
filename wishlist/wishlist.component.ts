import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { 

  }
  latestMovies: any = [];
  trendingMovies: any=[]

  ngOnInit(): void {
  }
  getMovies() {
    this.movieService.getMovies().subscribe(
    (data: any) => {
      this.latestMovies = data.results;
      console.log(data.results);
    });

    

}
}
