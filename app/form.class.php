<?php
class Contact{
  public $firstName;
  public $lastName;
  public $email;
  public $url;
  public $comment;
  

  public function __construct($firtName, $lastName, $email, $url, $comment){
    $this->firstname = $firstName;
    $this->lastname = $lastName;
    $this->email = $emil;
    $this->url = $url;
    $this->comment = $comment;
  }

  public insert($firstName, $lastName, $email, $url, $comment){
    $db = Db::getInstance();
    $stmt = $db->prepare("INSERT INTO `contacts`(`firstname`, `lastname`, `email`, `url`, `comment` ) VALUES (?,?,?,?,?)"); 
    $stmt->bind_param("sssss", $firtName, $lastName, $email, $url, $comment);
    $stmt->execute();
  }
}
?>
