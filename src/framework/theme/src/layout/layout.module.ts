import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// nga-card
import {
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
} from './card/card.component';

// nga-layout
import {
  NgaLayoutComponent,
  NgaLayoutHeaderComponent,
  NgaLayoutColumnComponent,
  NgaLayoutFooterComponent,
} from './layout/layout.component';

// nga-sidebar
import {
  NgaSidebarComponent,
  NgaSidebarHeaderComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
} from './sidebar/sidebar.component';

// nga-tabset
import {
  NgaTabsetComponent,
} from './tabset/tabset.component';

// nga-tabset-tab
import {
  NgaTabsetTabComponent,
  NgaTabsetTabHeaderComponent,
  NgaTabsetTabContentComponent,
} from './tabset-tab/tabset-tab.component';

const NGA_LAYOUT_COMPONENTS = [
  NgaCardComponent,
  NgaCardHeaderComponent,
  NgaCardBodyComponent,
  NgaCardFooterComponent,
  NgaLayoutComponent,
  NgaLayoutHeaderComponent,
  NgaLayoutColumnComponent,
  NgaSidebarComponent,
  NgaSidebarHeaderComponent,
  NgaSidebarContentComponent,
  NgaSidebarFooterComponent,
  NgaLayoutFooterComponent,
  NgaTabsetComponent,
  NgaTabsetTabComponent,
  NgaTabsetTabHeaderComponent,
  NgaTabsetTabContentComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
  exports: [
    ...NGA_LAYOUT_COMPONENTS,
  ],
})
export class NgaLayoutModule {
}
