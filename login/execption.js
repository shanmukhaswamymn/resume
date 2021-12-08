function execption(){
    var user_name=document.getElementById("res").value;
    var password=document.getElementById("pass").value;
    if( user_name!==""){
        if( user_name.length < 5){
            document.getElementById("msg").innerHTML="Invalid user_name";
        }else if(password!==""){
            document.getElementById("msg").innerHTML="login succesful";
        }
        else{
             document.getElementById("msg").innerHTML="Enter Password";
            }
       
    }else{ document.getElementById("msg").innerHTML="user_name empty";}

}