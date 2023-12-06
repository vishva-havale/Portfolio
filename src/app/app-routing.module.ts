import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { OtherComponent } from './Components/other/other.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component:AboutMeComponent
  },
  {
    path: 'skills',
    component:SkillsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'contact',
    component:ContactMeComponent
  },
  {
    path: 'other',
    component:OtherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
