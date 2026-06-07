import {test,expect} from '@playwright/test';
test("Api testing put call", async({request})=>{
    const response = await request.put("/booking/1",{
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data:{
            
    "firstname" : "wish",
    "lastname" : "Brown",
    "totalprice" : 999,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Pan cakes"
}
        
    })
const jsonresponse=await response.json();
console.log(jsonresponse);
expect(response.status()).toBe(200);
expect(response.statusText()).toBe("OK");
expect(response.ok()).toBeTruthy();
expect(jsonresponse).toMatchObject({

     "firstname" : "wish",
    "lastname" : "Brown",
    "totalprice" : 999,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Pan cakes"
})
expect(jsonresponse.additionalneeds).toBe("Pan cakes");
const resp=await request.get("https://restful-booker.herokuapp.com/booking/1")
console.log(await resp.json());
})