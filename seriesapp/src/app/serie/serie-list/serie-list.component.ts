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
  averageSeasons: number = 0;
  selectedSerie: Serie | null = null;
  
  constructor(private serieService: SerieService) { }

  getSeriesList(): void {
    this.serieService.getSeries().subscribe((data) => {
      this.series = data;
      console.log('Series cargadas:', this.series);
      this.averageSeasons = this.getAverageSeasons();
    });
  }

  getAverageSeasons(): number {
    const totalSeasons = this.series.reduce((total, s) => total + s.seasons, 0);
    return totalSeasons / this.series.length;
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  ngOnInit() : void {
    this.getSeriesList();
  }
}