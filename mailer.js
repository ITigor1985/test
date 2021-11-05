const nodemailer = require('nodemailer');

  
// const formEl = document.querySelector('.call-back');

// const btn = document.querySelector('.consultation__form-button ');
// const inputName = document.querySelector('.modal-form__name');
// const inputeEmail = document.querySelector('.modal-form__tel');
// const formData = {};

// inputeEmail.addEventListener('input', changeInput);
// inputName.addEventListener('input', changeInput);
// formEl.addEventListener('submit', formSubmit)

// function changeInput(event) {    
//     //formData[event.target.name] = event.target.value;    
//   }
//   function formSubmit(event) {
//     event.preventDefault();    
//     const {
//         elements: { username, telephon },
//       } = event.currentTarget;
//       formData.username=username.value;
//       formData.telephon=telephon.value
//     console.log(formData);
//     event.currentTarget.reset();
//   }

  const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port:587,
      secure: false,
      
        auth:{
            user: 'anvmail2021@gmail.com',
            pass: 'ma14riha'
        }
  })
 const mailOtions = {
     from:'anvmail2021@gmail.com',
     to:'anvmail2021@gmail.com',
     subject: "c caita",
     text: `hello and hy}`
 }

 transporter.sendMail(mailOtions, err => console.log(err));