import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: {skillName: string, level: number}[];

  constructor() {
    this.skills = this.setOfSkills();
  }

  setOfSkills(): {skillName: string, level: number}[] {
    return [
      {skillName: 'Java', level: 3},
      {skillName: 'Spring Boot', level: 3},
      {skillName: 'Microservices', level: 2},
      {skillName: 'Cloud', level: 2},
      {skillName: 'Docker', level: 2},
      {skillName: 'Angular', level: 3},
      {skillName: 'TypeScript', level: 3},
      {skillName: 'HTML5', level: 2},
      {skillName: 'CSS3', level: 2},
      {skillName: 'JavaScript', level: 2}
    ];
  }
}
