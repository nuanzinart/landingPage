<?php 


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// if (
// 	// empty($name) || empty($email) || empty($subject) || empty($message)
// 	$name == false
// ) {
// 	echo 'Complete the field';
	
	
// } else {
// 	echo $name . " <br> " . $email . " <br> " . $subject . " <br> " . $message;
// }

if (preg_match("/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i", $email)) {
echo "True";
}else{
echo "False";
}

if(!preg_match("/^[0-9]{10,10}+$/", $phone)) {
	echo "False";
} else {
	echo "True";
}

;



?>