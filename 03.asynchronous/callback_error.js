import { db } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_NO_TABLE_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

function runTest(db) {
  db.run(CREATE_TABLE_SQL, () => {
    console.log("テーブルを作成しました");

    db.run(INSERT_SQL, function () {
      console.log("レコードを追加しました。ID =", this.lastID);

      db.run(INSERT_SQL, (err) => {
        console.error(err.message);

        db.get(SELECT_NO_TABLE_SQL, (err) => {
          console.error(err.message);

          db.run(DROP_TABLE_SQL, () => {
            console.log("テーブルを削除しました");

            db.close(() => {
              console.log("DB をクローズしました");
            });
          });
        });
      });
    });
  });
}

runTest(db);
