import { runAsync, getAsync, closeAsync } from "./db.js";
import { createTableSQL, insertSQL, selectSQL, dropTableSQL } from "./sql.js";

async function runTest() {
  await runAsync(createTableSQL);
  console.log("テーブルを作成しました");

  const id = await runAsync(insertSQL);
  console.log("レコードを追加しました。ID =", id);

  const row = await getAsync(selectSQL, id);
  console.log("取得したレコード:", row);

  await runAsync(dropTableSQL);
  console.log("テーブルを削除しました");

  await closeAsync();
  console.log("DB をクローズしました");
}

runTest();
