import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura PIC!';
  fotos = [
    {
      'descricao': 'Ford Bravo',
      'local': 'https://visualhunt.com/photos/1/blue-vintage-car-in-front-of-house.jpg'
    },
    {
      'opacidade': '0.8',
      'descricao': 'Carro abandonado',
      'local': 'https://visualhunt.com/photos/1/oldtimer-car-vintage-old-headlight-engine-hood.jpg'
    },
    {
      'descricao': 'Barco em alto mar',
      'local': 'https://visualhunt.com/photos/1/boat-water-sea-ship.jpg'
    }
  ];
}
