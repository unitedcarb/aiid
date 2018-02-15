<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Root '/' route");
    return $this->renderer->render($response, 'index.phtml', $args);
});


$app->get('/features', function(Request $request, Response $response, array $args) {
    $this->logger->info("Features '/' route");

    $results = getFeatures($this->db, $this->logger);

    if( isset( $results["Error"]) ) {
      $result= $response->withJSON($results['Error'])->withHeader('Content-Type', 'application/json');
    } else {
      $message = array("count"=>sizeOf($results), "features"=>$results);
      $result = $response->withJSON($message)
      ->withHeader('Content-Type','application/json');
    }
    return $result;

  });


    $app->get('/sidebarFeatures', function(Request $request, Response $response, array $args) {
      $this->logger->info("Sidebar Features '/' route");
      $featureObj = populateSideBarFeatures($this->db, $this->logger);

      $message = array("message"=> $featureObj );
      $result = $response->withJSON($message)
      ->withHeader('Content-Type','application/json');

      return $result;

    });

    $app->map(['GET','POST','PUT','DELETE','PATCH'], '/{routes:.+}', function($req, $res){
      $handler = $this->notFoundHandler;
      return $handler($req, $res);
    });


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


  function populateSideBarFeatures($_db, $_logger){
    $featureArray = array();
		$uniqueProducts = array();
    $uniqueReleases = array();
    $uniqueCategories = array();
    $features = getFeatures($_db, $_logger);

/*      foreach($f as $fetures){
        array_push($featureArray, constructSidebarObj($f));
      }
  */
      return $features;
    }


  function constructSidebarObj($feature){
    $categoryFeaturesArray = array();
    $categoriesArray = array();
    $releaseArray = array();

    //just add feature to this category features array
    $featureObj = array("_id"=>$feature->_id, "featureName"=>$feature->featureName);
    array_push($categoryFeaturesArray,  $featureObj );
    $categoryObj = array("categoryName"=>$feature->featureCategoryName, "categoryFeatures"=>$categoryFeaturesArray);
    array_push($categoriesArray, $categoryObj);
    $releaseObj = array("releaseName"=>$feature->releaseName, "categories"=>$categoriesArray);
    array_push($releaseArray, $releaseObj);
    $featureObj = array("productName"=>$feature->productName,"releases"=>$releaseArray);

    return $featureObj;
  }

  ?>
