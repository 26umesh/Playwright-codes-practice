import {test} from "@playwright/test";
import fs from "fs";
import {parse} from "csv-parse/sync";
const records=parse(fs.readFileSync("TestData/TestData.csv"),{
    columns:true,
    skip_empty_lines:true,
})





records.forEach((record)=>{
test(`get data from csv - ${record.ID}`, async ({page})=>{
console.log(records);
await page.goto("https://demoqa.com/automation-practice-form")
await page.getByPlaceholder('First Name', { exact: true }).fill(record.FirstName);
await page.getByPlaceholder('Last Name').fill(record.LastName  );

})
})