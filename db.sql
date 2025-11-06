CREATE DATABASE skincarehub;

USE skincarehub;

CREATE TABLE recommendations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  skin_type VARCHAR(30),
  tip VARCHAR(255)
);

INSERT INTO recommendations (skin_type, tip) VALUES
('dry', 'Use gentle hydrating cleansers'),
('dry', 'Apply moisturizer immediately after washing'),
('oily', 'Use a foaming face wash to remove excess oil'),
('oily', 'Use clay masks weekly to control shine'),
('sensitive', 'Avoid alcohol-based products'),
('combination', 'Use toner on oily T-zone'),
('normal', 'Maintain a basic routine daily');
