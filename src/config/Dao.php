<?php

class Sql extends PDO 
{
    private $conn;
    public function __construct()
    {
        $dirConn = __DIR__ .'/../database/database.sqlite3';
        $this->conn = new PDO(
            "sqlite:$dirConn",
            "",
            "",
            array(PDO::ATTR_PERSISTENT => true)
        );
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function updateLite($table, $id, $data = array())
    {
        $query = "UPDATE $table SET marca = :marca, modelo = :modelo, ano = :ano WHERE id = :id";
        $stmt = $this->conn->prepare($query); 
        $stmt->execute([
            ":id"=>$id,
            ":marca" => $data['marca'],
            ":modelo" => $data['modelo'],
            ":ano" => $data['ano']
        ]);
        return $stmt->rowCount();

    }

    public function selectLiteOne($table, $id)
    {
        $query = "SELECT * FROM $table WHERE id = '$id'";
        $stmt = $this->conn->query($query); 
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function deleteLite($table, $id)
    {
        $query = "DELETE FROM $table WHERE id = :id";
        $stmt = $this->conn->prepare($query); 
        $stmt->execute([":id"=>$id]);

        $response = [
            "lines affected"=> $stmt->rowCount(),
            "message"=> ""
        ];

        if ($stmt->rowCount() != 0) {
            $response["message"] = "Record removed successfully";
            return $response;
        } else {
            $response["message"] = "No records to delete";
            return $response;
        }
        
    }

    public function selectLite($table)
    {
        $query = "SELECT * FROM $table";
        $stmt = $this->conn->query($query); 
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function insertLite($params)
    {
        $query = "INSERT INTO Cars (id, marca, modelo, ano) VALUES ('$params[id]', '$params[marca]', '$params[modelo]', $params[ano])";
        $this->conn->query($query); 
    }
}