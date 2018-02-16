<?php

function getComments($_db, $_logger) {
    try {
      $query = "SELECT * FROM Comments";
      $sth = $_db->prepare($query);
      $sth->execute();
    } catch(PDOException $e){
      $_logger->error("PDO Error " . $e->getMessage());
      return array("Error"=> $e->getMessage() );
    }
    $results = $sth->fetchAll(PDO::FETCH_OBJ);
    return $results;
  }

  function findComments($_db, $_logger, $commentId) {
    try {
      $query = "SELECT * FROM Comments WHERE _id = :commentId";
      $sth = $_db->prepare($query);
      $sth->bindParam(':commentId', $commentId);
      $sth->execute();
    } catch(PDOException $e){
      $_logger->error("PDO Error " . $e->getMessage());
      return array("Error"=> $e->getMessage() );
    }
    $results = $sth->fetch(PDO::FETCH_ASSOC);
    return $results;
  }


?>