<?php
require_once __DIR__ . '/controllers/CarroController.php';

use Pecee\SimpleRouter\SimpleRouter;
use Carro\Controller\CarroController;


SimpleRouter::get('/', [CarroController::class, "renderPage"]);
SimpleRouter::post('/carros', [CarroController::class, "store"]);
SimpleRouter::get('/carros/{id}', [CarroController::class, "showOne", $params]);
SimpleRouter::put('/carros/{id}', [CarroController::class, "edit", $params]);
SimpleRouter::delete('/carros/{id}', [CarroController::class, "destroy", $params]);
SimpleRouter::get('/carros', [CarroController::class, "show"]);