#!/usr/bin/env node

import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const today = new Date();
const year = args.y ?? today.getFullYear();
const month = args.m ?? today.getMonth() + 1;

const firstDay = new Date(year, month - 1, 1);
const lastDay = new Date(year, month, 0);

console.log(`${month}月 ${year}`.padStart(13, " "));
console.log("日 月 火 水 木 金 土");

process.stdout.write("   ".repeat(firstDay.getDay()));

for (let date = 1; date <= lastDay.getDate(); date++) {
  const formattedDay = String(date).padStart(2, " ");
  const isSaturday = (firstDay.getDay() + date - 1) % 7 === 6;
  const isLastDay = date === lastDay.getDate();

  if (isSaturday || isLastDay) {
    process.stdout.write(`${formattedDay}\n`);
  } else {
    process.stdout.write(`${formattedDay} `);
  }
}
