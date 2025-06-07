import sqlite3 from "sqlite3";

export const db = new sqlite3.Database(":memory:");

export function runAsync(sql) {
  return new Promise((resolve, reject) => {
    db.run(sql, function (err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  });
}

export function getAsync(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export function closeAsync() {
  return new Promise((resolve) => {
    db.close(() => {
      resolve();
    });
  });
}
