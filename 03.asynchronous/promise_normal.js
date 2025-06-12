import { db, runAsync, getAsync, closeAsync } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

runAsync(db, CREATE_TABLE_SQL)
  .then(() => {
    console.log("テーブルを作成しました");
    return runAsync(db, INSERT_SQL);
  })
  .then((result) => {
    console.log("レコードを追加しました。ID =", result.lastID);
    return getAsync(db, SELECT_SQL, [result.lastID]);
  })
  .then((row) => {
    console.log("取得したレコード:", row);
    return runAsync(db, DROP_TABLE_SQL);
  })
  .then(() => {
    console.log("テーブルを削除しました");
    return closeAsync(db);
  })
  .then(() => {
    console.log("DB をクローズしました");
  });
