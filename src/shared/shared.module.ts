import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IntlInputPhoneModule } from 'intl-input-phone';
import { QuillModule } from 'ngx-quill';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
    declarations: [
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
        ToastrModule
    ]
})
export class SharedModule { }
