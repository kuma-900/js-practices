import sqlite3 from "sqlite3";

export const db = new sqlite3.Database(":memory:");

export function runAsync(sql, params) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(this);
      }
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
