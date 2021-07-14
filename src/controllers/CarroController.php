<?php 

namespace Carro\Controller;

require_once __DIR__ . '/../models/CarrosModel.php';

use Pecee\SimpleRouter\SimpleRouter;
use Carro\Model\CarroModel;
use Pecee\Http\Request;

class CarroController
{  

    static function renderPage()
    {
        $htmlPage = __DIR__."/../../public/index.html";
        readfile($htmlPage);
    }

    static function show()
    {
        $result = CarroModel::searchData("Cars");
        $result = json_encode($result);
        return $result;
    }

    static function showOne($id)
    {
        $result = CarroModel::searchOneData("Cars", $id);
        $result = json_encode($result);
        return $result;
    }

    static function store()
    {
        $bytes = md5(uniqid(random_bytes(5), true));
        $str_json = file_get_contents('php://input');
        $str_json = json_decode($str_json);
        $str_json->{"id"} = $bytes;

        $data = [
            "id"=> $str_json->{"id"},
            "marca"=> $str_json->{"marca"}, 
            "modelo"=> $str_json->{"modelo"}, 
            "ano"=> $str_json->{"ano"}
        ];

        CarroModel::saveDataFile($data);
        
        SimpleRouter::response()->json([
            "data"=>$data,
            "Message"=>"Data entered successfully"
        ]);
    }

    static function edit($id)
    {
        $str_json = file_get_contents('php://input');
        $str_json = json_decode($str_json);

        $data = [
            "marca"=> $str_json->{"marca"}, 
            "modelo"=> $str_json->{"modelo"}, 
            "ano"=> $str_json->{"ano"}
        ];

        CarroModel::updateData("Cars", $id, $data);

        SimpleRouter::response()->json([
            "data"=>$data,
            "Message"=>"Data updated successfully"
        ]);
    }

    static function destroy($id)
    {
        $result = CarroModel::deleteData("Cars", $id);
        $result = json_encode($result);
        return $result;
    }    

}