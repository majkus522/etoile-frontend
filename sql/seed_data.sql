-- 1. Dodawanie testowych użytkowników (hasła są oczywiście zhashowane tekstowo na potrzeby testów)
INSERT INTO Users (username, email, password_hash, is_designer) VALUES
('jan_kowalski', 'jan@etoile.pl', '$2b$12$4Tow5BdOQ5CcnJPjdVPW/O2IUv5.FvVfuX401mSzoLecb0v3qGQWG', false),
('anna_projektantka', 'anna@etoile.pl', '$2b$12$4Tow5BdOQ5CcnJPjdVPW/O2IUv5.FvVfuX401mSzoLecb0v3qGQWG', true),
('milosz_test', 'milosz@etoile.pl', '$2b$12$4Tow5BdOQ5CcnJPjdVPW/O2IUv5.FvVfuX401mSzoLecb0v3qGQWG', false);

-- 2. Dodawanie kategorii biżuterii
INSERT INTO Categories (name) VALUES
('Naszyjniki'),
('Pierścionki'),
('Bransoletki'),
('Elementy ozdobne (Zawieszki)');

-- 3. Dodawanie produktów (baza do kreatora i sklepu) wraz ze ścieżkami do zdjęć
INSERT INTO Products (category_id, name, price, image_path, stock) VALUES
(1, 'Złoty łańcuszek splot Anchor', 249.99, '/uploads/products/lancuszek_anchor.jpg', 50),
(2, 'Srebrny pierścionek baza', 89.00, '/uploads/products/pierscionek_baza.jpg', 120),
(4, 'Zawieszka Gwiazdka Étoile (Diament)', 150.00, '/uploads/products/zawieszka_gwiazdka.jpg', 35),
(4, 'Zawieszka Perła Naturalna', 120.00, '/uploads/products/zawieszka_perla.jpg', 20),
(3, 'Bransoletka sznurkowa czerwona', 45.00, '/uploads/products/bransoletka_czerwona.jpg', 200);

-- 4. Tworzenie przykładowego autorskiego projektu użytkownika anna_projektantka (User_id: 2)
INSERT INTO Custom_Projects (user_id, name, total_price) VALUES
(2, 'Mój gwiezdny naszyjnik', 399.99);

-- 5. Przypisanie elementów do powyższego projektu (Łańcuszek + Zawieszka gwiazdka)
INSERT INTO Project_Elements (project_id, product_id, quantity) VALUES
(1, 1, 1), -- 1x łańcuszek
(1, 3, 1); -- 1x zawieszka gwiazdka

-- 6. Dodanie postu na bloga prezentującego ten projekt
INSERT INTO Blog_Posts (user_id, project_id, title, description, image_path) VALUES
(2, 1, 'Premiera mojej nowej koncepcji - Gwiezdny Naszyjnik!', 'Zaprojektowałam ten naszyjnik z myślą o minimalistycznej elegancji. Co sądzicie?', '/uploads/blog/gwiezdny_naszyjnik_live.jpg');

-- 7. Przykładowe polubienie od janka (User_id: 1) pod tym postem
INSERT INTO Post_Likes (post_id, user_id) VALUES
(1, 1);