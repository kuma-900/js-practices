import { runAsync, getAsync, closeAsync } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_NO_TABLE_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

async function runTest() {
  await runAsync(CREATE_TABLE_SQL);
  console.log("テーブルを作成しました");

  const id = await runAsync(INSERT_SQL);
  console.log("レコードを追加しました。ID =", id);

  try {
    await runAsync(INSERT_SQL);
  } catch (insertError) {
    console.error(insertError.message);
  }

  try {
    await getAsync(SELECT_NO_TABLE_SQL);
  } catch (selectError) {
    console.error(selectError.message);
  }

  await runAsync(DROP_TABLE_SQL);
  console.log("テーブルを削除しました");

  await closeAsync();
  console.log("DB をクローズしました");
}

runTest();
