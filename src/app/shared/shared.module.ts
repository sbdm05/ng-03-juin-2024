import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { IconsModule } from '../icons/icons.module';
import { BtnComponent } from './components/btn/btn.component';

// 1 - ici attention, on exporte TotalPipe pour y avoir accès dans OrdersModule
// 2 - on n'oublie pas d'importer SharedModule dans OrdersModule
@NgModule({
  declarations: [TotalPipe, BtnComponent],
  imports: [CommonModule],
  exports: [TotalPipe, IconsModule, BtnComponent],
})
export class SharedModule {}
