import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',// 组件的 CSS 元素选择器
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  // selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  // 放置初始化逻辑
  ngOnInit(): void {
    this.getHeroes();
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  getHeroes(): void {
    // subscribe() 方法把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性
    // 使用这种异步方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了
     this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
