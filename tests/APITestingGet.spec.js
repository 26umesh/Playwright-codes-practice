import {test,request,expect} from "@playwright/test";
//test("API testing get practice 1",async({request})=>{

    //const resp1=await request.get("https://restful-booker.herokuapp.com/booking");
    //console.log(await resp1.json());

//})
    
test("Api testing get practice 2",async()=>{
const reqcontext=await request.newContext({
    baseURL:"https://restful-booker.herokuapp.com",
extraHTTPHeaders:{
    Accept:"application/json"
}
});
const resp1=await reqcontext.get("/booking/4");
//console.log(await resp1.json);
console.log(await resp1.json());

expect(resp1.status()).toBe(200)
//expect(await resp1.json()).toMatchObject({

    // firstname: 'Arlene',
 // lastname: 'Greenfelder',
  //totalprice: 831,
  //depositpaid: false,
  //bookingdates: { checkin: '2018-01-11', checkout: '2023-01-03' },
 // additionalneeds: 'Breakfast'
//})
const jsobres=await resp1.json();
expect(jsobres.firstname).toBe('Mark');
})

test("API with ui verification",async({request})=>{
    const resp2=await request.get("https://api.demoblaze.com/entries");
    const jsonresp2=await resp2.json();
    console.log(jsonresp2.Items[0].title);
    await page.goto("https://www.demoblaze.com/");
    await expect(page.getByRole('link', { name: 'Samsung Galaxy S6' })).toHaveText(jsonresp2.Items[0].title);
})