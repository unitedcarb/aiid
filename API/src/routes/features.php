<?php

  function getFeatures($_db, $_logger) {
    try {
      $query = "SELECT * FROM Features";
      $sth = $_db->prepare($query);
      $sth->execute();
    } catch(PDOException $e){
      $_logger->error("PDO Error " . $e->getMessage());
      return array("Error"=> $e->getMessage() );
    }
    $results = $sth->fetchAll(PDO::FETCH_OBJ);
    return $results;
  }

  function findFeatures($_db, $_logger, $featureId) {
    try {
      $query = "SELECT * FROM Features WHERE _id = :featureId";
      $sth = $_db->prepare($query);
      $sth->bindParam(':featureId', $featureId);
      $sth->execute();
    } catch(PDOException $e){
      $_logger->error("PDO Error " . $e->getMessage());
      return array("Error"=> $e->getMessage() );
    }
    $results = $sth->fetch(PDO::FETCH_ASSOC);
    return $results;
  }


  function populateSideBarFeatures($_db, $_logger){
    $featureArray = array();
    
    $features = getFeatures($_db,$_logger);
    $uniqueProducts = getAllUniqueProducts($_db,$_logger);
    foreach($uniqueProducts as $p){
      $categoriesFeatureArray = array();
      $releasesArray = array();
      $featureObj = array();

      $uniqueReleases = getUniqueReleasesForProduct($_db,$_logger, $p);
      foreach($uniqueReleases as $r){
        $uniqueCategories =  getUniqueCategoriesForRelease($_db,$logger,$r);
          foreach($uniqueCategories as $c){
            $releaseFeatures = getFeaturesforCategoryInRelease($_db,$logger,$r,$c);
            array_push($categoriesFeatureArray, array("categoryName"=>$c, "categoryFeatures"=>$releaseFeatures));
          }
          array_push($releasesArray, array("releaseName"=>$r, "categories"=>$categoriesFeatureArray));
        }
        array_push($featureObj, array("productName"=>$p, "releases"=>$releasesArray));
        array_push($featureArray, $featureObj);
    }
    
    return $featureArray;
  }

  function getAllUniqueProducts($_db, $_logger){
    $uniqueProducts = array();
    $features = getFeatures($_db,$logger);
    foreach($features as $f){
      if( !in_array($f->productName, $uniqueProducts, TRUE) ) {
        array_push($uniqueProducts, $f->productName);
      }
    }
    return $uniqueProducts;
  }

  function getUniqueReleasesForProduct($_db,$_logger,$product){
    $uniqueReleases = array();
    $features = getFeatures($_db,$logger);

    foreach($features as $f){
      if(trim($f->productName) == trim($product)) {
        if( !in_array($f->releaseName, $uniqueReleases, TRUE) ) {
          array_push($uniqueReleases, $f->releaseName);
        } 
     }
    }
    return $uniqueReleases;
  }

 function getUniqueCategoriesForRelease($_db,$logger,$release){
  $uniqueCategories = array();
  $features = getFeatures($_db,$logger);

  foreach($features as $f){
      if(trim($f->releaseName) == trim($release)) {
        if( !in_array($f->featureCategoryName, $uniqueCategories, TRUE) ) {
          array_push($uniqueCategories, $f->featureCategoryName);
        } 
     } 
    }
    return $uniqueCategories;
 }

 function getFeaturesforCategoryInRelease($_db,$_logger,$release,$category){
  $releaseFeatures = array();
  $features = getFeatures($_db,$_logger);

  foreach($features as $f){
    if(trim($f->releaseName) == $release && trim($f->featureCategoryName) == $category){
      if( !in_array($f->featureName, $releaseFeatures, TRUE)) {
        array_push($releaseFeatures, $f);
      }
    }
  }
  return $releaseFeatures;
 } 

 ?>