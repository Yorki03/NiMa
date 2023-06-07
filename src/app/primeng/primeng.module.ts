import { NgModule } from '@angular/core';


import { AccordionModule } from 'primeng/accordion';     
import {AnimateModule} from 'primeng/animate';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {DividerModule} from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { ToolbarModule } from 'primeng/toolbar';
import { OrderListModule } from 'primeng/orderlist';
import { ImageModule } from 'primeng/image';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MegaMenuModule } from 'primeng/megamenu';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  
  exports: [
    AccordionModule,
    AnimateModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DividerModule,
    InputTextModule,
    MenubarModule,
    ScrollPanelModule,
    ToolbarModule,
    OrderListModule,
    ImageModule,
    VirtualScrollerModule,
    SplitButtonModule,
    MegaMenuModule,
    SidebarModule
  ]
})
export class PrimengModule { }
