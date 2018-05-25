<?php

 class DB{

    private static $instance = NULL;
    private function __construct(){}
    private function __clone(){}
    public function getInstance(){
      if(!isset(self::$instance)){
        self::$instance = new mysqli($_ENV['host'], $_ENV['user'], $_ENV['password'], $_ENV['dbase']);
      }
     return self::$instance;
   }
 }
?>
