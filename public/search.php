<?php 
// Database configuration 
$dbHost     = "localhost"; 
$dbUsername = "root"; 
$dbPassword = ""; 
$dbName     = "cat_db"; 
 
// Create database connection 
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName); 
 
// Check connection 
if ($db->connect_error) { 
    die("Connection failed: " . $db->connect_error); 
} 
 
// Get search term 
$searchTerm = $_GET['test']; 
 
// Fetch matched data from the database 
$query = $db->query("SELECT * FROM dogbreed WHERE name LIKE '%".$searchTerm."%' ORDER BY name ASC"); 
 
// Generate array with skills data 
$skillData = array(); 
if($query->num_rows > 0){ 
    while($row = $query->fetch_assoc()){ 
        $data['id'] = $row['id']; 
        $data['value'] = $row['name']; 
        array_push($skillData, $data); 
    } 
} 
console.log($skillData);
// Return results as json encoded array 
echo json_encode($skillData); 
?>