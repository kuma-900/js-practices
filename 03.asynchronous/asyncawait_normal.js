import { runAsync, getAsync, closeAsync } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

async function runTest() {
  await runAsync(CREATE_TABLE_SQL);
  console.log("テーブルを作成しました");

  const result = await runAsync(INSERT_SQL);
  console.log("レコードを追加しました。ID =", result.lastID);

  const row = await getAsync(SELECT_SQL, [result.lastID]);
  console.log("取得したレコード:", row);

  await runAsync(DROP_TABLE_SQL);
  console.log("テーブルを削除しました");

  await closeAsync();
  console.log("DB をクローズしました");
}

runTest();
