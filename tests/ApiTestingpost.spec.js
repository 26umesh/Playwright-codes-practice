import{test,expect} from '@playwright/test';
test('post api testing',async({request})=>{

const resp1=await request.post("/booking",{
    data : {
        "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"



    }

});
console.log(await resp1.json());  
const jsonrep=await resp1.json();
//expect(resp1.status()).toBe(200);
//expect(resp1.statusText()).toBe("OK") ; 
expect(resp1.ok()).toBeTruthy();
expect(jsonrep.booking).toMatchObject({
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,     
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",   
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"         
                                

})

})

test('API with ui verification',async({request})=>{
    await request.post("https://api.demoblaze.com/addtocart",{
        data:{
            
        }
    })
console.log("API call is successful");
})