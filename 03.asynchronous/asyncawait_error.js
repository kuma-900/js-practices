import { runAsync, getAsync, closeAsync } from "./db.js";
import {
  createTableSQL,
  insertSQL,
  selectNoTableSQL,
  dropTableSQL,
} from "./sql.js";

async function runTest() {
  await runAsync(createTableSQL);
  console.log("テーブルを作成しました");

  const id = await runAsync(insertSQL);
  console.log("レコードを追加しました。ID =", id);

  try {
    await runAsync(insertSQL);
  } catch (insertError) {
    console.error(insertError.message);
  }

  try {
    await getAsync(selectNoTableSQL);
  } catch (selectError) {
    console.error(selectError.message);
  }

  await runAsync(dropTableSQL);
  console.log("テーブルを削除しました");

  await closeAsync();
  console.log("DB をクローズしました");
}

runTest();
