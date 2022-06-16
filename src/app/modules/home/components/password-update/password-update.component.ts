import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { PasswordUpdate } from 'src/app/models/passwordUpdate';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.css']
})
export class PasswordUpdateComponent implements OnInit {

  minPw = 8;
  passwordForm!: FormGroup;
  buttonCaption = 'save';
  buttonicon = 'save';

  passwordUpdate!:PasswordUpdate;

  constructor(private formBuilder: FormBuilder,
              private authService:AuthService,
              ) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.minLength(4)]],
      newPassword: ['', [Validators.required, Validators.minLength(this.minPw)]],
      newPasswordConfi: ['', [Validators.required, Validators.minLength(this.minPw)]],
    }, {validator: this.passwordMatchValidator('newPasswordConfi','newPassword')});
  }


  private passwordMatchValidator(oldPassword:string,newPassword:string): ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup; 
    const valueOfoldPassword=  formGroup.get('oldPassword')?.value ;
    const valueOfnewPassword=  formGroup.get('newPassword')?.value ;

    if (valueOfoldPassword === valueOfnewPassword)
      return null;
    else
      return {passwordMismatch: true};
  }
};

updatePassword(){
  if(this.passwordForm.valid)
  {
    this.passwordUpdate.userName=this.authService.getUserName();
    this.passwordUpdate.oledPassword=this.passwordForm.get('oldPassword')?.value ;
    this.passwordUpdate.newPassword=this.passwordForm.get('newPassword')?.value ;
    this.authService.uapdatePassword(this.passwordUpdate).subscribe(data=>{
       if (data)
       alert("password updated successfully");
       else alert("your old password was incorrectly typed");
    });
  }
  else alert("your old password was incorrectly typed");
}
closeForm(){

}
}
