import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // hero 属性必须是一个带有 @Input() 装饰器的输入属性
  // 用 @Input 装饰器来让 hero 属性可以在外部的 HeroesComponent 中绑定
  // @Input() hero?: Hero;
  hero: Hero | undefined;
  // ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息。
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
    // paramMap 是一个从 URL 中提取的路由参数值的字典。
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save():void{
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
