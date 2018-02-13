<?php

use Slim\Http\Request;
use Slim\Http\Response;

require "routes/getFeatures.php";

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Root '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});


$app->get('/features', function(Request $request, Response $response, array $args) {
    $this->logger->info("Features '/' route");
    
    $results = getFeatures();

    if( isset( $results["Error"]) ) {
      $result=$response->withJson($results['Error'])->withHeader('Content-Type', 'application/json');
    } else {
      $message = array("count"=>sizeOf($results), "features"=>$results);

      $result = $response->withJSON($message)
      ->withHeader('Content-Type','application/json');
    }
    return $result;
  });


  $app->get('/sidebarFeatures', function(Request $request, Response $response, array $args){
    $message = array("message"=>"Sidebar Features!");

    $result = $response->withJSON($message)
    ->withHeader('Content-Type','application/json');
  });

  $app->map(['GET','POST','PUT','DELETE','PATCH'], '/{routes:.+}', function($req, $res){
    $handler = $this->notFoundHandler;
    return $handler($req, $res);
  });



  function getFeatures(){
    try {
      $query = "SELECT * FROM Features";
      $sth = $this->db->prepare($query);
      $sth->execute();
    } catch(PDOException $e){
      $this->logger->error("PDO Error " . $e->getMessage());
      return array("Error"=>$e->getMessage());
    }

    $results = $sth->fetchAll(PDO::FETCH_OBJ);
  }
  ?>