export const createTableSQL = `
  CREATE TABLE books (
    id    INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE NOT NULL
  )
`;

export const insertSQL = `INSERT INTO books (title) VALUES ("Ruby入門")`;
export const selectSQL = `SELECT * FROM books WHERE id = ?`;
export const selectNoTableSQL = `SELECT * FROM no_table`;
export const dropTableSQL = `DROP TABLE books`;
