'use strict';

let userForm = new UserForm();

userForm.loginFormCallback = function (data) {
   let _this = this;
   ApiConnector.login(data,
      (response) => {
         if (response.success) {
            location.reload();
         } else {
            _this.loginErrorMessageBox = _this.setLoginErrorMessage(response.error);
         };
      })
};

userForm.registerFormCallback = function (data) {
   let _this = this;
   ApiConnector.register(data,
      (response) => {
         if (response.success) {
            location.reload();
         } else {
            _this.registerErrorMessageBox = _this.setRegisterErrorMessage(response.error);
         };
      })
};