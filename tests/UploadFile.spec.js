import {test} from "@playwright/test"
test("Practice file upload",async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
   // await page.locator("#filesToUpload").setInputFiles("TestData/TestData.csv")
     await page.locator("#filesToUpload").setInputFiles(["TestData/TestData.csv","TestData/my.txt","TestData/ram.txt"])
    

})

test("Practice File Upload 2",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload");
const filechoosepromise=page.waitForEvent("filechooser");
await page.locator("#drag-drop-upload").click();
const filechooserresolved=await filechoosepromise;
await filechooserresolved.setFiles("TestData/TestData.csv");



})