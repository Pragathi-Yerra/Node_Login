import { LoginData } from "../Data/logindata.js";
export const Login = async(req,res)=>{
    try{
        var flag=0;
       // console.log(req.body)
        let data = LoginData.filter(data=> data.username===req.body.username).filter(data=>data.password===req.body.password).map(data => data.username)
        if(data[0]===req.body.username)
        {
            res.status(200).send("user found")
        }
        // console.log(data);
        else{
            res.send("user not found! Please enter correct username or password")
        }
        // for(var i = 0; i < LoginData.length ; i++){
        //     console.log("inside for loop")

        //     if(LoginData[i].username === req.body.username)
        //     {
        //         flag=1;
        //         res.status(200).send("found");
        //         break;
        //     }  
        // }
        // if(flag==0)
        // res.send("not found")
    }
    catch(err){
        next(err)
    }
    }

