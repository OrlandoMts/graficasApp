import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return  this.http.get<any>(environment.URL);
  }

  getDonaData() {
    return this.getData()
               .pipe(
                  map(data => {
                    const labels: string[]= Object.keys(data);
                    const datasets: number[] = Object.values(data);

                    return {labels, datasets};
                  })
               );
  }
}
