import { db } from "./db.js";
import { createTableSQL, insertSQL, selectSQL, dropTableSQL } from "./sql.js";

db.run(createTableSQL, () => {
  console.log("テーブルを作成しました");

  db.run(insertSQL, function () {
    console.log("レコードを追加しました。ID =", this.lastID);

    db.get(selectSQL, [this.lastID], (err, row) => {
      console.log("取得したレコード:", row);

      db.run(dropTableSQL, () => {
        console.log("テーブルを削除しました");

        db.close(() => {
          console.log("DB をクローズしました");
        });
      });
    });
  });
});
