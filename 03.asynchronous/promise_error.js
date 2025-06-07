import { runAsync, getAsync, closeAsync } from "./db.js";
import {
  createTableSQL,
  insertSQL,
  selectNoTableSQL,
  dropTableSQL,
} from "./sql.js";

runAsync(createTableSQL)
  .then(() => {
    console.log("テーブルを作成しました");
    return runAsync(insertSQL);
  })
  .then((id) => {
    console.log("レコードを追加しました。ID =", id);
    return runAsync(insertSQL);
  })
  .catch((insertError) => {
    console.error(insertError.message);
    return getAsync(selectNoTableSQL);
  })
  .catch((selectError) => {
    console.error(selectError.message);
    return runAsync(dropTableSQL);
  })
  .then(() => {
    console.log("テーブルを削除しました");
    return closeAsync();
  })
  .then(() => {
    console.log("DB をクローズしました");
  });
