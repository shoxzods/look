INSERT INTO products ( product_name , product_img ) VALUES 
( 'Burger Cheese' , 'burger_cheese.jpeg'), 
( 'Chicken Togora' , 'chicken_togora.jpeg'),
( 'Chicken Wings' , 'chicken_wings.jpeg'),
( 'Cola' , 'cola.jpeg'),
( 'Fanta' , 'fanta.jpeg'),
( 'Spinner' , 'spinner.jpeg'),





select sum(count) as count , product_img , product_name , user_id from (select orders.id , user_id , product_name , product_img , count from orders left join users on users.id = orders.user_id left join products on orders.product_id = products.id) group by user_id , product_name , product_img;