import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  passwordUpdate:PasswordUpdate =new PasswordUpdate();
  username:string='';

  constructor(private formBuilder: FormBuilder,
              private authService:AuthService,
              private dialogRef: MatDialogRef<PasswordUpdateComponent>,
              ) { }

  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required,Validators.minLength(4)]],
      newPassword: ['', [Validators.required,Validators.minLength(8)]],
      newPasswordConfi: ['', [Validators.required,Validators.minLength(8)]],
    }, {validators: this.passwordMatchValidator('newPassword','newPasswordConfi')});
    this.username=this.authService.getUserName();
  }


  private passwordMatchValidator(oldPassword:string,newPassword:string): ValidatorFn {
    return (control:AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup; 
    const valueOfoldPassword=  formGroup.get(oldPassword)?.value ;
    const valueOfnewPassword=  formGroup.get(newPassword)?.value ;

    if (valueOfoldPassword === valueOfnewPassword)
      return null;
    else
      return {passwordMismatch: true};
  }
};

updatePassword()
{
  if(this.passwordForm.valid)
  {
    
    this.passwordUpdate.userName=this.username;
    console.log(this.passwordUpdate.userName);
    this.passwordUpdate.oldPassword=this.passwordForm.get('oldPassword')?.value ;
    console.log(this.passwordUpdate.oldPassword);
    this.passwordUpdate.newPassword=this.passwordForm.get('newPassword')?.value ;
    console.log(this.passwordUpdate.newPassword);
    this.authService.uapdatePassword(this.passwordUpdate).subscribe(data=>{
      if(data.responseCode===1)
      {
       alert("password updated successfully");
       this.closeForm();
      }
      else alert("your old password was incorrectly typed");
    },

    );
  }
  else alert("your old password was incorrectly typed");
}
closeForm(){
  this.dialogRef.close('none');
}
}
