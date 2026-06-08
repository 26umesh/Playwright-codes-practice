import{test,expect} from '@playwright/test';
test("Fetch and validating response headers",async({request})=>{
    const respo=await request.get("https://restful-booker.herokuapp.com/booking/1");
    const headers=respo.headers();
    console.log(headers);
   expect(headers.server).toEqual("Heroku");
   expect(headers["x-powered-by"]).toEqual("Express");

   console.log("********************8***");
   const heardesArrayvalu=respo.headersArray();
    console.log(heardesArrayvalu);
    expect(heardesArrayvalu.length).toBe(10);
    heardesArrayvalu.forEach(header=>{
        console.log(header.value +"::"+header.name);
    });
});

