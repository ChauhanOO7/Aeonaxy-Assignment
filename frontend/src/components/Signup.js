import {useState,useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Signup()
{
    const checkbox=useRef();
    const navigate = useNavigate();
    const [data,setData]=useState({
        name:"",
        username:"",
        email:"",
        password:"",
    });
    const [error,setError]=useState(false);
    const [check,setCheck]=useState(false);
    const [emaildup,setEmaildup]=useState(false);
    const [usernamedup,setUsernamedup]=useState(false);

    function handlechange(e)
    {
        const temp={...data};
        temp[e.target.name]=e.target.value;
        setData(temp);
    }

    function handlecheck(e)
    {
        if(e.target.checked)
        {
            setCheck(false);
        }
        else
        {
            setCheck(true);
        }
        
    }

    async function handlesubmit(e)
    {
        e.preventDefault();
        if(data.name.length===0 || data.username.length===0 || data.email.length===0 || data.password.length===0)
        {
            setError(true);
            return;
        }
        if(!checkbox.current.checked)
        {
            setCheck(true);
            return;
        }

        try
        {
            const response=(await axios.post("https://backendprofile.vercel.app/signup/check",{email:data.email,username:data.username})).data;

            if(response.email && response.username)
            {
                setEmaildup(true);
                setUsernamedup(true);
                return;
            }

            if(!response.email && response.username)
            {
                setUsernamedup(true);
                setEmaildup(false);
                return;
            }

            if(response.email && !response.username)
            {
                setEmaildup(true);
                setUsernamedup(false);
                return;
            }
        }
        catch(error)
        {
            console.error(error);
        }

        await axios.post("https://backendprofile.vercel.app/signup",data).then(()=>{
            console.log("data send successfully");
        }).catch((err)=>{
            console.error(err);
        });

        setData({
            name:"",
            username:"",
            email:"",
            password:"",
        });

        setEmaildup(false);
        setUsernamedup(false);
        if(checkbox.current)
        {
            checkbox.current.checked=false;
        }

        navigate(`/profile/${encodeURIComponent(data.username)}`);
        
    }

    return (
        <div className="lg:flex lg:h-screen">
            <div className="lg:w-1/3">
                <img className="h-40 lg:h-full w-full" src="https://images.unsplash.com/photo-1551902675-a415b7df1ba1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
            </div>
            <div className="lg:w-2/3">
                <p className="mt-5 text-right lg:text-sm lg:mr-10 lg:mt-8">Already a member? <span className="text-[#401F71]">Sign ln</span></p>
                <h1 className="text-2xl font-extrabold mx-24 mb-5 mt-5 lg:pt-10 lg:mb-8 lg:mx-40 lg:px-20">Sign up to Dribbble</h1>
                <div className="flex flex-col :ml-10 pl-10 lg:pb-5">
                    {emaildup ?<label className="text-red-500 lg:ms-20 lg:ps-20">- Email has been already taken</label>:""}
                    {usernamedup ?<label className="text-red-500 lg:ms-20 lg:ps-20">- Username has been already taken</label>:""}
                </div>

                <form className="ml-10 flex flex-col lg:mx-40 lg:px-20"> 
                    <div className="lg:flex lg:mb-10">
                        <div className="flex flex-col">
                            <label htmlFor="first"><strong>Name</strong></label>
                            <input className="w-80 h-10" type="text" id="first" name="name" value={data.name} onChange={handlechange} placeholder="Name"/>
                            {error && data.name.length===0 ?<label className="text-red-500">Name can not be empty!</label>:""}
                        </div>
                        <div className="flex flex-col lg:ml-2">
                            <label htmlFor="second"><strong>Username</strong></label>
                            <input className="w-80 h-10" type="text" id="second" name="username" value={data.username} onChange={handlechange} placeholder="Username"/>
                            {error && data.username.length===0  ?<label className="text-red-500">Username can not be empty!</label>:""}
                        </div>
                    </div>

                    <label htmlFor="third"><strong>Email</strong></label>
                    <input className="w-80 h-10" type="text" id="third" name="email" value={data.email} onChange={handlechange} placeholder="Email"/>
                    {error && data.email.length===0  ?<label className="text-red-500">Email can not be empty!</label>:""}
                    <label className="lg:mt-10" htmlFor="fourth"><strong>Password</strong></label>
                    <input className="w-80 h-10" type="text" id="fourth" name="password" value={data.password} onChange={handlechange} placeholder="Password"/>
                    {error && data.password.length===0  ?<label className="text-red-500">Password can not be empty!</label>:""}
                    <div className="lg:w-84 lg:mt-9 flex">
                        <input type="checkbox" name="check" ref={checkbox} onChange={handlecheck}/>
                        <p className="lg:text-gray-500 lg:ml-2 lg:text-left" htmlFor="fifth">Creating an account means you're okay with our <span className="text-[#86469C]">Terms of Service, Privacy Policy,</span> and our default <span className="text-[#86469C]">Notification Settings.</span></p>
                    </div>
                    {check ?<label className="text-red-500">Please check the box!</label>:""}
                    <button className="w-48 py-2 bg-[#e54e85] text-white rounded-lg mt-5" onClick={handlesubmit}>Create Account</button>
                </form>
                <p className="ml-10 w-96 text-xs text-gray-500 lg:mx-40 mt-5 lg:ps-20">This site is protected by reCAPTCHA and the Google <span className="text-[#401F71]">Privacy Policy</span> and <span className="text-[#401F71]">Terms of Service</span> apply.</p>
            </div>
        </div>
    );
}