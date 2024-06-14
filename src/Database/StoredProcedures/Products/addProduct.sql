CREATE OR ALTER PROCEDURE addProduct(
    @id VARCHAR(255),
    @name VARCHAR(255),
    @price int
)
AS
BEGIN
    INSERT into products (id, name, price) VALUES(@id, @name, @price)
END