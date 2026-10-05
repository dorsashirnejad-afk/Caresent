// Example secure backend (Node/Express). Keep KAVENEGAR_API_KEY in server environment variables.
// Verify the current Kavenegar API endpoint/parameters from its official documentation before production use.
import express from "express";
const app=express(); app.use(express.json());
app.post("/api/send-sms", async (req,res)=>{
  const {phone,services}=req.body;
  if(!/^09\d{9}$/.test(phone)||!Array.isArray(services)||!services.length) return res.status(400).json({ok:false});
  // Production: map service IDs to clinic-approved templates on the SERVER,
  // then call Kavenegar using process.env.KAVENEGAR_API_KEY.
  // Never accept arbitrary SMS text from the browser in production.
  return res.status(501).json({ok:false,message:"Configure Kavenegar on server"});
});
app.listen(process.env.PORT||3000);