<?php
namespace Carro\Model;

require_once __DIR__ . '/../config/Dao.php';

use Sql;

class CarroModel extends Sql
{

    static public function saveDataFile($data)
    {
        $sql = new Sql();
        $sql->insertLite($data);
    }

    static public function searchData($table)
    {
        $sql = new Sql();
        return $sql->selectLite($table);
    }

    static public function searchOneData($table, $id)
    {
        $sql = new Sql();
        return $sql->selectLiteOne($table, $id);
    }

    static public function deleteData($table, $id)
    {
        $sql = new Sql();
        return $sql->deleteLite($table, $id);
    }

    static public function updateData($table, $id, $data)
    {
        $sql = new Sql();
        return $sql->updateLite($table, $id, $data);
    }

}