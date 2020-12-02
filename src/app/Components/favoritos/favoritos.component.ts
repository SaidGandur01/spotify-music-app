import { SearchService } from './../../Services/SearchService/search.service';
import { Component, OnInit } from '@angular/core';
import { FollowTracksService } from 'src/app/Services/FollowTracks/follow-tracks.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  public token: string;
  public tracks: any[] = [];

  constructor(
    private searchService: SearchService,  
    private followService: FollowTracksService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.token = this.searchService.getTokenSetted();
    this.getTracks();
  }

  private getTracks() {
    this.followService.getFavoriteTracks(this.token).subscribe(res => {
      this.spinner.hide();
      console.log('Esto es lo que me retorna el servicio: ', res.items);
      this.tracks = res.items;
    }, error => { 
      this.spinner.hide();
      console.log('Ups, ha habido un error: ', error);
    });
  }

  public removeItem(data: any) {
    this.spinner.show();
    console.log(data.track.id);
    this.followService.removeTracks(data.track.id, this.token).subscribe(res => {
      // this.spinner.hide();
      console.log('eliminado exitosamente: ', res);

      this.getTracks();

    }, error => {
        this.spinner.hide();
        console.log('Ups, ha habido un error: ', error);
    });
  }

}
