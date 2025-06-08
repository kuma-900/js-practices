import { db } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

function runTest(db) {
  db.run(CREATE_TABLE_SQL, () => {
    console.log("テーブルを作成しました");

    db.run(INSERT_SQL, function () {
      console.log("レコードを追加しました。ID =", this.lastID);

      db.get(SELECT_SQL, [this.lastID], (err, row) => {
        console.log("取得したレコード:", row);

        db.run(DROP_TABLE_SQL, () => {
          console.log("テーブルを削除しました");

          db.close(() => {
            console.log("DB をクローズしました");
          });
        });
      });
    });
  });
}

runTest(db);
