CREATE or Alter PROCEDURE paginateProducts(@num int)
AS
BEGIN
    SELECT * from  products  ORDER BY name
    offset 0 ROWS FETCH NEXT @num ROWS ONLY
end
