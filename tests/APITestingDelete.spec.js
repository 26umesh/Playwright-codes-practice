import{test,expect} from "@playwright/test";

test("Api testing Delete call",async({request})=>{
   const response = await request.delete("https://restful-booker.herokuapp.com/booking/2",{

        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    })
    expect(response.status()).toBe(201);
    const restext=await response.text();
    console.log(restext);
    expect(restext).toEqual("Created");
console.log("Delete call is successful");
   const getResponse = await request.get("https://restful-booker.herokuapp.com/booking/1");
    expect(getResponse.status()).toBe(404);

})