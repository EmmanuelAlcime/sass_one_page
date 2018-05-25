<?php

  $fname =  stripslashes( trim( $_POST['fname'] ));
  $lname =  stripslashes( trim( $_POST['lname'] ));
  $email =  stripslashes( trim( $_POST['email']));
  $url =    stripslashes( trim( $_POST['url']));
  $comment = stripslashes( trim( $_POST['comment']));

  try{
        if(!empty($fname) && !empty($comment)){
         throw new Exception("please enter you first and last (name)",1);
        }
     
        if(!filter_var($emial, FILTER_VALIDATE_EMAIL)){
           throw new Exception("invalid email.",1);
        }
        if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$url)) {
           throw new Exception("Invalid URL",1); 
         }
       }
     $contact = new Contact(); // create instance of contact
     $insert = $contact::insert($fname,$lname, $email, $url, $comment); // insert data into database.

     if($insert){
        print("your contact information has been successfully saved!");
     }
   }catch( Exception $e){
     print($e->getMessage());
  }


?>
