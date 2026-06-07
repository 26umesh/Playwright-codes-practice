import{test} from "@playwright/test";

test("drag and drop",async({page})=>{

    await page.goto("https://demoqa.com/droppable")

    await page.locator('#draggable').hover();
    await page.mouse.down();
    await page.getByText('Drop Here').hover();
    await page.mouse.up()

    await expect (page.getByText('Dropped!')).toHaveText("Dropped!")

})