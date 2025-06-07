import { db } from "./db.js";
import {
  createTableSQL,
  insertSQL,
  selectNoTableSQL,
  dropTableSQL,
} from "./sql.js";

db.run(createTableSQL, () => {
  console.log("テーブルを作成しました");

  db.run(insertSQL, function () {
    console.log("レコードを追加しました。ID =", this.lastID);

    db.run(insertSQL, (insertError) => {
      console.error(insertError.message);

      db.get(selectNoTableSQL, (selectError) => {
        console.error(selectError.message);

        db.run(dropTableSQL, () => {
          console.log("テーブルを削除しました");

          db.close(() => {
            console.log("DB をクローズしました");
          });
        });
      });
    });
  });
});
