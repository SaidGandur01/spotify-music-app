import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { FollowTracksService } from 'src/app/Services/FollowTracks/follow-tracks.service';
import { SearchService } from 'src/app/Services/SearchService/search.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  public inputField: FormControl = new FormControl();
  public searchResults: any[] = [];
  public followTracks: any[] = [];
  // public token: string;
  public liked: boolean = false;
  public token :any;

  constructor(private searchService: SearchService, private route: ActivatedRoute, private followService: FollowTracksService, private spinner: NgxSpinnerService, private toastr: ToastrService
  ) {
    this.route.fragment.subscribe((fragment) => {
      if (fragment != null) {
        this.token = fragment.toString();
        this.token = this.token.split("=");
        this.token = this.token['1'];
        this.searchService.setToken(this.token);  
      } else {
        this.token = this.searchService.getTokenSetted();
      }    
    });
  }

  ngOnInit(): void {
    this.spinner.show();
    console.log(this.token);
    this.inputField.valueChanges
      .subscribe(inputField => this.searchService.searchTrack(inputField, this.token)
        .subscribe(result => {
          this.searchResults = result.tracks.items;
          // console.log("Esto es searchResult: ", this.searchResults);
        }));
    this.spinner.hide();
  }

  public addTrack(track) {
    console.log(track);
    console.log(this.token);
    this.toastr.success('Canción agregada a favoritos');
    // this.searchService.getCurrentUser(this.token).subscribe(res => {
    //   console.log('User: ', res);
    //   this.spinner.hide();
    // });

    this.followService.addTrack(track.id,this.token).subscribe(res => {
      console.log("follow: ", res);
    }, error => {
      console.log("follow error: ",error);
    });

  }
}
