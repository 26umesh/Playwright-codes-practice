import{expect,test} from "@playwright/test"
import apidata from "../testdata/apidata.json"

test("Api testing-pass request body from jsonfor post call",async({request})=>{
    const respot=await request.post("https://restful-booker.herokuapp.com/booking",{
      data:apidata  

    })
    const resjson=await respot.json();
    expect(resjson.booking).toMatchObject(apidata.postcalldat)
        

    
    expect(resjson.booking.additionalneeds).toBe(apidata.additionalneeds);

})


test("Api testing -pass request body from jsonfor put call",async({request})=>{
    const respo=await request.put("https://restful-booker.herokuapp.com/booking/1",{
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
        data: apidata.putcalldat
})
const resjson=await respo.json();
expect().toMatchObject(
)
expect(respo.firstname).toEqual("wishinfinite");

})