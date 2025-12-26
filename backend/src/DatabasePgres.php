<?php
/**
 * put this here for now
 * 
 */
class DatabasePgres {
  private $connection;

  public function getConnection() {
    if($this->connection) return $this->connection;

    $host = getenv('');

  }
}