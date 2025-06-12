import { db, runAsync, getAsync, closeAsync } from "./db.js";
import {
  CREATE_TABLE_SQL,
  INSERT_SQL,
  SELECT_NO_TABLE_SQL,
  DROP_TABLE_SQL,
} from "./sql.js";

await runAsync(db, CREATE_TABLE_SQL);
console.log("テーブルを作成しました");

const result = await runAsync(db, INSERT_SQL);
console.log("レコードを追加しました。ID =", result.lastID);

try {
  await runAsync(db, INSERT_SQL);
} catch (err) {
  if (err?.code === "SQLITE_CONSTRAINT") {
    console.error(err.message);
  } else {
    throw err;
  }
}

try {
  await getAsync(db, SELECT_NO_TABLE_SQL);
} catch (err) {
  if (err?.code === "SQLITE_ERROR" && err.message.includes("no such table")) {
    console.error(err.message);
  } else {
    throw err;
  }
}

await runAsync(db, DROP_TABLE_SQL);
console.log("テーブルを削除しました");

await closeAsync(db);
console.log("DB をクローズしました");
