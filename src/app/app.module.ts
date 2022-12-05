import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbChatModule,NbSidebarModule, NbListModule, NbUserComponent, NbCardComponent, NbUserModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FootComponent } from './foot/foot.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProductosComponent } from './productos/productos.component';
import { ChatComponent } from './chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'https://tesinabackfunction.azurewebsites.net/api/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FootComponent,
    NavbarComponent,
    SignupComponent,
    HomeComponent,
    EmpresasComponent,
    ProductosComponent,
    ChatComponent
  ],
  imports: [
    
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    NbUserModule,
    NbCardModule,
    NbLayoutModule,
    SocketIoModule.forRoot(config)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
