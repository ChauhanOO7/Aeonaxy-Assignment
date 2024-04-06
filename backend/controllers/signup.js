const users=require("../models/signup");

async function handlecheck(req,res)
{
    const data=req.body;
    const email=await users.findOne({Email:data.email});
    const username=await users.findOne({Username:data.username});

    return res.json({email:email,username:username});
}

async function handlesignup(req,res)
{

    const data=req.body;
    const user=await new users({
        Name:data.name,
        Username:data.username,
        Email:data.email,
        Password:data.password,
        image_url:"",
        location:"",
        brings_you:[]

    });

    user.save();

    return res.json({created:true});

}

async function handleupdate(req,res)
{
    const result=req.body;
    let email="";
    if(!Array.isArray(result.data))
    {
        email=await users.findOneAndUpdate({Username:result.username},{

            image_url:result.data.image_url,
            location:result.data.location
        });
    }
    else
    {
        email=await users.findOneAndUpdate({Username:result.username},{

            brings_you:result.data
        });
    }

    return res.json({Email:email.Email});
}


async function handledata(req,res)
{
    const data=req.body;
    const username=await users.findOne({Username:data.username});

    return res.json({username:username});
}

module.exports={handlesignup,handlecheck,handleupdate,handledata};