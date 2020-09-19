<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

//$target="uploads/";
//$f=basename($_FILES["image"]["name"]);
//$file=$target.basename($_FILES["image"]["name"]);
//move_uploaded_file($_FILES["image"]["tmp name"],$file);

$name=$request->name;
$price=$request->price;
$discount=$request->discount;
$withdiscount=$request->withdiscount;
$desc=$request->description;
$quantity=$request->quantity;
$rating=$request->ratings;
$image=$request->image;


$sql= "INSERT INTO product1( p_name, p_price, p_discount, p_withdis, p_quantity, p_image, p_ratings, p_desc) VALUES ('$name',$price,$discount,$withdiscount,$quantity,'$image',$rating,$desc)";



       if(mysqli_query($mysqli,$sql))
       {
        echo json_encode("product added succesfully");
       }
?>
