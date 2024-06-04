import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { IconsModule } from '../icons/icons.module';

// 1 - ici attention, on exporte TotalPipe pour y avoir accès dans OrdersModule
// 2 - on n'oublie pas d'importer SharedModule dans OrdersModule
@NgModule({
  declarations: [TotalPipe],
  imports: [CommonModule],
  exports: [TotalPipe, IconsModule],
})
export class SharedModule {}
