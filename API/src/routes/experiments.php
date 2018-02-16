<?php

function getExperiments($_db, $_logger) {
    try {
      $query = "SELECT * FROM Experiments";
      $sth = $_db->prepare($query);
      $sth->execute();
    } catch(PDOException $e){
      $_logger->error("PDO Error " . $e->getMessage());
      return array("Error"=> $e->getMessage() );
    }
    $results = $sth->fetchAll(PDO::FETCH_OBJ);
    return $results;
  }

  function findExperiments($_db, $_logger, $experimentFilter) {
    try {
      $query = "SELECT * FROM Experiments WHERE status = :experimentFilter";
      $sth = $_db->prepare($query);
      $sth->bindParam(':experimentFilter', $experimentFilter);
      $sth->execute();
    } catch(PDOException $e){
      $_logger->error("PDO Error " . $e->getMessage());
      return array("Error"=> $e->getMessage() );
    }
    $results = $sth->fetch(PDO::FETCH_ASSOC);
    return $results;
  }

?>