import { db, runAsync, getAsync, closeAsync } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_NO_TABLE_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

runAsync(db, CREATE_TABLE_SQL)
  .then(() => {
    console.log("テーブルを作成しました");
    return runAsync(db, INSERT_SQL);
  })
  .then((result) => {
    console.log("レコードを追加しました。ID =", result.lastID);
    return runAsync(db, INSERT_SQL);
  })
  .catch((err) => {
    console.error(err.message);
    return getAsync(db, SELECT_NO_TABLE_SQL);
  })
  .catch((err) => {
    console.error(err.message);
    return runAsync(db, DROP_TABLE_SQL);
  })
  .then(() => {
    console.log("テーブルを削除しました");
    return closeAsync(db);
  })
  .then(() => {
    console.log("DB をクローズしました");
  });
