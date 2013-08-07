$(function () {
  $('#test').html("test");
  
  var sms = navigator.mozSms;
  
  sms.send("01193876033", "Hello world!");
  
  sms.onreceived = function (event) {
	console.log(event.message);
  };
});
