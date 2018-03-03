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
    $results =  $sth->fetchAll(PDO::FETCH_OBJ);
    return $results;
  }

  function processQueryParams($_db, $_logger, $queryParams) {
    $queryString = "SELECT * FROM Experiments WHERE ";
    $whereClause = "";

    foreach( $queryParams as $key => $value ){
        switch( $key ) {
          case 'status':
          $whereClause .= " `status` = '" . $value ."'";
          break;
          case 'category':
          $whereClause .= " `category` = '" . $value ."'";
          break;
          case 'journey':
          $whereClause .= " `journey` = '" . $value ."'";
          break;
          case 'channel':
          $whereClause .= " `channel` IN ( '" . $value . "')";
          break;
        }
        $whereClause .= " AND ";
    }
    $query = $queryString . $whereClause;
    $sqlQuery = substr( $query, 0, strlen($query) -5 );

    try {
      $sth = $_db->prepare($sqlQuery);
      $sth->execute();
    } catch(PDOException $e){
      $_logger->error("PDO Error " . $e->getMessage());
      return array("Error"=> $e->getMessage() );
    }
    $results = $sth->fetch(PDO::FETCH_ASSOC);
    return $results;

  }

?>