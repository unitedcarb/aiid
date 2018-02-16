<?php

use Slim\Http\Request;
use Slim\Http\Response;

include "routes/features.php";
include "routes/experiments.php";
include "routes/comments.php";

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
     return $this->renderer->render($response, 'index.phtml', $args);
});


$app->get('/features', function(Request $request, Response $response, array $args) {
    $results = getFeatures($this->db, $this->logger);
    return returnResults($results);
  });

  $app->get('/features/{id}', function(Request $request, Response $response, array $args) {
    $results = findFeatures($this->db, $this->logger, $args['id']);
    return returnResults($results);
  });

    $app->get('/sidebarFeatures', function(Request $request, Response $response, array $args) {
      $featureObj = populateSideBarFeatures($this->db, $this->logger);
      $result = $response->withJSON($featureObj)->withHeader('Content-Type','application/json');
      return $result;
    });

    
    $app->get('/experiments', function(Request $request, Response $response, array $args) {
      $results = getExperiments($this_db, $this->logger);
      return returnResults($results);
    });

    $app->get('/experiments/{filter}', function(Request $request, Response $response, array $args) {
      $results = findExperiments($this_db, $this->logger);
      return returnResults($results);
    });

    $app->get('/comments', function(Request $request, Response $response, array $args) {
      $results = getComments($this_db, $this->logger);
      return returnResults($results);
    });

    $app->get('/comments/{id}', function(Request $request, Response $response, array $args) {
      $results = findComments($this_db, $this->logger,$args['id']);
      return returnResults($results);
    });

    $app->map(['GET','POST','PUT','DELETE','PATCH'], '/{routes:.+}', function($req, $res){
      $handler = $this->notFoundHandler;
      return $handler($req, $res);
    });

    function returnResults($results){
      if( isset( $results["Error"]) ) {
        $result= $response->withJSON($results['Error'])->withHeader('Content-Type', 'application/json');
      } else {
        $result = $response->withJSON($results)
        ->withHeader('Content-Type','application/json');
      }
      return $result;
    }
?>
