<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->get('/', function (Request $request, Response $response, array $args) {
    // Sample log message
    $this->logger->info("Root '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});


$app->get('/features', function(Request $request, Response $response, array $args) {
    $this->logger->info("Features '/' route");
 try {
    $query = "SELECT * FROM Features";
    $sth = $this->herokuDB->prepare($query);
    $sth->execute();
  } catch(PDOException $e){
    $this->logger->error("PDO Error " . $e->getMessage());
    $message = array("Error"=>$e->getMessage());
    $result=$response->withJson($message)->withHeader('Content-Type', 'application/json');
    return $result;
  }
    $results = $sth->fetchAll(PDO::FETCH_OBJ);
    $message = array("count"=>sizeOf($results), "features"=>$results);

    $result = $response->withJSON($message)
    ->withHeader('Content-Type','application/json');
   
    return $result;
  });


  $app->map(['GET','POST','PUT','DELETE','PATCH'], '/{routes:.+}', function($req, $res){
    $handler = $this->notFoundHandler;
    return $handler($req, $res);
  });
  ?>