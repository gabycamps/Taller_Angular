import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];

  constructor(private serieService: SerieService) {}

  getCoursesList(): Array<Serie> {
    this.serieService.getSeries().subscribe((dataSeries)=> {
      this.series = dataSeries;
    });
    return this.series;
  }

  ngOnInit() {
    this.series = this.getCoursesList();
  }
}