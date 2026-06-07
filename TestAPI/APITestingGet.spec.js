import {test} from "@playwright/test";
test("API testing get practice 1",async({request})=>{

    const resp1=await request.get("https://restful-booker.herokuapp.com/booking");
    console.log(await resp1.json());

})
    
