<?php
class RoomModel {
    private PDO $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function getRooms(): array {
        $stmt = $this->pdo->query("SELECT * FROM Rooms");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function createRoom(array $data): array {
        $stmt = $this->pdo->prepare("
            INSERT INTO Rooms (id, name, capacity)
            VALUES (:id, :name, :capacity)
        ");
        $stmt->execute([
            ':id' => $data['id'],
            ':name' => $data['name'],
            ':capacity' => $data['capacity']
        ]);
        return ['success' => true, 'message' => 'Room added successfully'];
    }

    public function deleteRoom(string $id): array {
        $stmt = $this->pdo->prepare("DELETE FROM Rooms WHERE id = :id");
        $stmt->execute([':id' => $id]);
        return ['success' => true, 'message' => 'Room deleted'];
    }
}
