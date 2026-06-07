import{test,expect} from '@playwright/test';
test('Clientapp',async({page})=>{

    const productName="ZARA COAT 3";
   
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator('#userEmail').fill('umesh.kachhawa25@gmail.com');
    await page.locator('#userPassword').fill('U@k260598');
    await page.locator('#login').click();
    await page.waitForLoadState('networkidle');
    const product=await page.locator('.card-body');
    const titles=await page.locator('.card-body b').allTextContents();
    console.log(titles);
    const count1=await product.count();
    for(let i=0;i<count1;i++){

        if(await product.nth(i).locator("b").textContent()===productName){
            await product.nth(i).locator("text=Add To Cart").click();
            console.log("steps is getting executed");
            break;
        }
        else{
            console.log("not executing");
        }
    }

    await page.locator("[routerlink*='cart' ]").click();
    await page.locator("div li").first().waitFor();
    const bool=await page.locator("div[class='cartSection'] h3").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();
    await page.locator("[placeholder='Select Country']").type('ind',{delay:100});
    const dropdown=await page.locator(".ta-results");
    await dropdown.waitFor();
    optioncounts=await dropdown.locator('button').count();

    for(let i=0;i<optioncounts;i++){
        text=await dropdown.locator('button').nth(i).textContent();

        if(text===" India")
        {
            await dropdown.locator('button').nth(i).click();
            break;
        }

    }
  await expect(page.locator("label[type='text']")).toHaveText(email);

  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. " );
  const orderid=await page.locator(".em-spacer-1 .ng-star-inserted ").textContent();
  console.log(orderid);

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();



});
