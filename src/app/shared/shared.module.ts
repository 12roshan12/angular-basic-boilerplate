import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { QuillModule } from 'ngx-quill';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        QuillModule.forRoot(),
        NgSelectModule,
        ReactiveFormsModule,
        IntlInputPhoneModule,
        FormsModule,
        CommonModule,
        RouterModule,
        ToastrModule.forRoot(),
    ],
    exports: [
        QuillModule,
        NgSelectModule,
        ReactiveFormsModule,
        IntlInputPhoneModule,
        FormsModule,
        CommonModule,
        RouterModule,
        ToastrModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }
