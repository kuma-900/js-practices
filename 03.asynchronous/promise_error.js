import { runAsync, getAsync, closeAsync } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_NO_TABLE_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

runAsync(CREATE_TABLE_SQL)
  .then(() => {
    console.log("テーブルを作成しました");
    return runAsync(INSERT_SQL);
  })
  .then((id) => {
    console.log("レコードを追加しました。ID =", id);
    return runAsync(INSERT_SQL);
  })
  .catch((insertError) => {
    console.error(insertError.message);
    return getAsync(SELECT_NO_TABLE_SQL);
  })
  .catch((selectError) => {
    console.error(selectError.message);
    return runAsync(DROP_TABLE_SQL);
  })
  .then(() => {
    console.log("テーブルを削除しました");
    return closeAsync();
  })
  .then(() => {
    console.log("DB をクローズしました");
  });
