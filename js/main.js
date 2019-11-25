
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
          console.log("input " + $(input[i]).val());
            if(validate(input[i]) == false){

                showValidate(input[i]);
                check=false;
            }
        }
if(check == true) {



  $.ajax({
                  type: "get",
                  url: "http://participateme.com/feedback.php",
                  data: {  'name' : $(input[0]).val(), 'email':$(input[1]).val() , 'comment' :'sample'  },
                  datatype : 'JSON',

                  success: function(response){
                      var res = JSON.parse(response);
                      console.log(res.status + "  i got the status ");

                      //setCookie("userID" , res.userID , 30);


                       //window.location.replace("/Surveyor/home.php");
                      //echo what the server sent back...

                      alert("There is some error! Please try after some time");


                  }
              });


//  alert("this is true")
}

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);
