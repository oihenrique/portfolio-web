import { Component } from '@angular/core';

@Component({
  selector: 'projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  uniformixImg = '../../../../assets/uniformix/uniformix.svg';
  uniformixlink = 'https://github.com/oihenrique/uniformix';
  relatoriosImg = '../../../../assets/relatorios.png';
  relatoriosLink = 'https://github.com/oihenrique/gerar-relatorios-itens-cancelados';
  sunsetHotelImg = '../../../../assets/sunset-hotel.png';
  sunsetHotelLink = 'https://github.com/oihenrique/Curso_Oracle_ONE/tree/master/Desafios/Challenge%20-%20SunsetHotel';
  doItForLifeImg = '../../../../assets/do-it-for-life.png';
  doItForLifeLink = 'https://github.com/oihenrique/Do-it-for-life';
}
