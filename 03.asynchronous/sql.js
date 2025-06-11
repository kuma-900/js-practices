export const CREATE_TABLE_SQL =
  "CREATE TABLE books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT UNIQUE NOT NULL)";
export const INSERT_SQL = "INSERT INTO books (title) VALUES ('Ruby入門')";
export const SELECT_SQL = "SELECT * FROM books WHERE id = ?";
export const SELECT_NO_TABLE_SQL = "SELECT * FROM no_table";
export const DROP_TABLE_SQL = "DROP TABLE books";
