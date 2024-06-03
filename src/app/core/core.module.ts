import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

// decorateur
@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavComponent, FooterComponent],
})
export class CoreModule {}

// ne pas oublier le RouterModule pour créer des liens
