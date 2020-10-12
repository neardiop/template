import { NgModule } from '@angular/core';
import { NbMenuModule, NbCardModule, NbIconModule, NbStepperModule, NbRadioModule, NbSpinnerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { DrpComponent } from './structure/drp/drp.component';
import { BureauComponent } from './structure/bureau/bureau.component';
import { CaisseComponent } from './structure/caisse/caisse.component';
import { UserComponent } from './user/user/user.component';
import { RoleComponent } from './user/role/role.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NbIconModule,
    NbStepperModule,
    NbRadioModule,
    NbSpinnerModule
  ],
  declarations: [
    PagesComponent,
    DrpComponent,
    BureauComponent,
    CaisseComponent,
    UserComponent,
    RoleComponent,
  ],
})
export class PagesModule {
}
