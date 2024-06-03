import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

// decorateur
@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent],
  imports: [CommonModule],
})
export class CoreModule {}
