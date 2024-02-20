import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmailWithTwoDotsMax } from '../../validators/email-validators';
import { RegisterValidators } from '../../validators/register-validators';
import { ToastrService } from 'ngx-toastr';
import { Modal, ModalInterface } from 'flowbite';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  loginFrom: FormGroup = new FormGroup({})
  registrationForm: FormGroup = new FormGroup({})
  showSide = false
  loginPasswordVisiblity: boolean = false
  registrationPasswordVisiblity: boolean = false
  registrationPasswordVisiblityConfirm: boolean = false

  options = {
    backdrop: 'dynamic',
    backdropClasses:
      'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
  };

  constructor(private fb: FormBuilder, private tostr: ToastrService) {
  }

  ngOnInit(): void {
    this.loginFrom = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]]
    })

    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required]],
      fullname: ['', Validators.required],
      userType: ['user'],
    }, [RegisterValidators.match('password', 'confirmPassword')]);

  }

  ngAfterViewInit() {
    const $targetEl = document.getElementById('default-modal-login');
  }

  $loginModalElement!: HTMLElement | null
  Loginmodal!: ModalInterface

  $registarModalElement!: HTMLElement | null
  Registermodal!: ModalInterface

  openLoginModal() {
    this.$loginModalElement = document.querySelector('#default-modal-login');
    this.Loginmodal = new Modal(this.$loginModalElement, { backdrop: 'static' })
    this.Loginmodal.show()
  }

  openRegisterModal() {
    this.$registarModalElement = document.querySelector('#default-modal-registration');
    this.Registermodal = new Modal(this.$registarModalElement, { backdrop: 'static' })
    this.Registermodal.show()
  }

  login() {
    this.loginFrom.markAllAsTouched()
    if (this.loginFrom.invalid) {
      this.tostr.error('Please fill all required fields')
      return
    }
    this.Loginmodal.hide()

  }

  closeLoginModal() {
    this.Loginmodal.hide()
  }

  closeRegisterModal() {
    this.Registermodal.hide()
  }

  register() {
    this.registrationForm.markAllAsTouched()
    if (this.registrationForm.invalid) {
      this.tostr.error('Please fill all required fields')
      return
    }
    this.Registermodal.hide()
  }

}
