import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './MyComponents/dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './MyComponents/dashboard/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GetEmployeesComponent } from './MyComponents/get-employees/get-employees.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    routingComponents,
    // GetEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
