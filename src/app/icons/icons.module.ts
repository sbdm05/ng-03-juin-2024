import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    IconCloseComponent,
    IconEditComponent,
    IconNavComponent,
    IconDeleteComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    IconCloseComponent,
    IconEditComponent,
    IconNavComponent,
    IconDeleteComponent,
  ],
})
export class IconsModule {}
