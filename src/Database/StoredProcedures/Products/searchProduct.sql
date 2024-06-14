CREATE or ALTER PROCEDURE searchProduct(@name varchar(255))
AS
BEGIN
    SELECT * from products WHERE name=@name
end
