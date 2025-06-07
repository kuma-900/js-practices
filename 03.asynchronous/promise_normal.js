import { runAsync, getAsync, closeAsync } from "./db.js";
import { createTableSQL, insertSQL, selectSQL, dropTableSQL } from "./sql.js";

runAsync(createTableSQL)
  .then(() => {
    console.log("テーブルを作成しました");
    return runAsync(insertSQL);
  })
  .then((id) => {
    console.log("レコードを追加しました。ID =", id);
    return getAsync(selectSQL, id);
  })
  .then((row) => {
    console.log("取得したレコード:", row);
    return runAsync(dropTableSQL);
  })
  .then(() => {
    console.log("テーブルを削除しました");
    return closeAsync();
  })
  .then(() => {
    console.log("DB をクローズしました");
  });
