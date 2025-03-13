INSERT INTO category (name) VALUES
('Men T-shirts'),
('Men Casual Shirts'),
('Men Shorts'),
('Men Watches'),
('Men Sunglasses'),
('Women Kurtas & Suits'),
('Women Skirts & Palazzos'),
('Women Dress Material'),
('Women Jeans & Jeggings'),
('Women Coats and Blazers'),
('Women Watches'),
('Women Sunglasses');


-- Insert Products
INSERT INTO product (name, price, image) VALUES
('Midnight T-shirt',600.00, 't_black.jpg'),
('Amethyst T-shirt',700.00, 't_purple.jpg'),
('Sunbeam T-shirt',800.00, 't_yellow.jpg'),
('Horizon T-shirt',650.00, 't_blue.jpg'),
('Ivory T-shirt', 500.00, 't_white.jpg'),
('Crimson T-shirt', 490.00, 't_red.jpg'),
('Emerald T-shirt', 520.00, 't_green.jpg'),

('Onyx Kurta',600.00, 'k_black.jpg'),
('Violet Kurta',700.00, 'k_purple.jpg'),
('Golden Kurta',800.00, 'k_yellow.jpg'),
('Azure Kurta',650.00, 'k_blue.jpg'),
('Pearl Kurta', 500.00, 'k_white.jpg'),
('Ruby Kurta', 490.00, 'k_red.jpg'),
('Jade Kurta', 520.00, 'k_green.jpg'),

('Obsidian Shirt',600.00, 's_black.jpg'),
('Lavender Shirt',700.00, 's_purple.jpg'),
('Citrine Shirt',800.00, 's_yellow.jpg'),
('Sapphire Shirt',650.00, 's_blue.jpg'),
('Alabaster Shirt', 500.00, 's_white.jpg'),
('Scarlet Shirt', 490.00, 's_red.jpg'),
('Fern Shirt', 520.00, 's_green.jpg'),

('Jet Sunglasses',200.00, 'g_black.jpg'),
('Lime Sunglasses',210.00, 'g_green.jpg'),
('Cherry Sunglasses',300.00, 'g_red.jpg');  

INSERT INTO product_category (product_id, category_id) VALUES
(1, 1),
(2, 1), 
(3, 1), 
(4, 1), 
(5, 1), 
(6, 1), 
(7, 1), 
(8, 6), 
(9, 6), 
(10, 6), 
(11, 6), 
(12, 6), 
(13, 6), 
(14, 6), 
(15,2), 
(16, 2), 
(17, 2), 
(18, 2),    
(19, 2), 
(20, 2), 
(21, 2), 
(22, 5), 
(23, 5), 
(24, 5),
(22, 12), 
(23, 12), 
(24, 12);

-- Insert SKUs
INSERT INTO sku (product_id, id, quantity, size, color) VALUES

