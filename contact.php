<?php 
$host = "localhost";
$username = "root";
$password = "";
$dbname = "humanity";

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérifier si les données du formulaire sont définies et non vides
    if (isset($_POST["firstname"]) && isset($_POST["sujet"]) && isset($_POST["email"]) && isset($_POST["subject"])) {
        $nomContact = $_POST["firstname"];
        $objetContact = $_POST["sujet"];
        $emailContact = $_POST["email"];
        $texteContact = $_POST["subject"];

        try {
            $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Préparer et exécuter la requête SQL avec des paramètres sécurisés
            $sql = "INSERT INTO contact (nom_contact, objet_contact, email_contact, message) VALUES (?, ?, ?, ?);";
            $stmt = $conn->prepare($sql);
            $stmt->execute([$nomContact, $objetContact, $emailContact, $texteContact]);
            
            echo "Données insérées avec succès.";
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    } else {
        echo "Tous les champs du formulaire doivent être remplis.";
    }
} else {
    echo "Le formulaire n'a pas été soumis.";
}
?>
