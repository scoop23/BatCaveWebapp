<?php
class UsersModel {
    private PDO $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function getUsers(): array {
        $stmt = $this->pdo->query("SELECT * FROM Users");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createUser(array $data): array {
        $stmt = $this->pdo->prepare("
            INSERT INTO Users (id, name, phone)
            VALUES (:id, :name, :phone)
        ");
        $stmt->execute([
            ':id' => $data['id'],
            ':name' => $data['name'],
            ':phone' => $data['phone']
        ]);
        return ['success' => true, 'message' => 'User created successfully'];
    }

    // admin stuff
    public function deleteUser(string $id): array {
        $stmt = $this->pdo->prepare("DELETE FROM Users WHERE id = :id");
        $stmt->execute([':id' => $id]);
        return ['success' => true, 'message' => 'User deleted'];
    }
}
