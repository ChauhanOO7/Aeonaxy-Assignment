import { useState } from "react";
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";

export default function Profile()
{
    const {username}=useParams();
    const navigate=useNavigate();
    const [file,setFile]=useState(null);
    const [location,setLocation]=useState("");
    const [error,setError]=useState(false);
    const [change,setChange]=useState(false);

    function handlefile(e)
    {
        const reader=new FileReader();
        setChange(false);
        reader.addEventListener("load",()=>{
            setFile(reader.result);
        });

        reader.readAsDataURL(e.target.files[0]);
    }

    function handleChange(e)
    {
        setLocation(e.target.value);
    }

    function handledefault()
    {
        setChange(true);    //for uploading a default image.
    }

    async function handleClick()
    {
        if(location.length===0)
        {
            setError(true);
            return;
        }

        await axios.post("https://backendprofile.vercel.app/signup/update",{username:username,data:{
            image_url:file,
            location:location
        }});

        navigate(`/extrainfo/${username}`);

    }

    return  (
        <div className="h-screen">
            <h2 className="pt-10 ml-10 text-[#e54e85] font-bold text-2xl">dribbble</h2>
            <div className="lg:mx-80 pl-10 mt-2 pt-10">
            
                <div>
                    <h1 className="text-4xl font-bold">Welcome! Let's create your profile</h1>
                    <p className="text-gray-500 mt-4 text-sm">Let others get to know you better! You can do these later</p>
                </div>

                <h2 className="font-bold mt-10">Add an avatar</h2>
                <div className="mt-5 lg:flex">
                    <div className="w-40 h-40 border-dashed border-2 border-gray-300 rounded-full">
                        <img className="w-40 h-40 rounded-full" src={change ? "/images/christina-wocintechchat-com-p0qKsW3uqA4-unsplash.jpg" : file} alt="" />
                    </div>
                    <div className="flex flex-col lg:ml-10 pl-2 pt-10">
                        <input type="file" onChange={handlefile}/>
                        <button className="font-bold text-gray-400 text-left mt-5" onClick={handledefault}>- Or choose one of our defaults</button>
                    </div>

                </div>
                <div className="mt-10 pt-7 flex flex-col w-64">
                    <h2 className="font-bold">Add your location</h2>
                    <input className="py-2 mt-4 mb-10" type="text"  placeholder="Enter a location" value={location} onChange={handleChange}/>
                    {error && location.length===0?<label className="text-red-500">Fill your location!</label>:""}
                    <button className="w-48 mt-5 mb-2 lg:mb-0 py-2 bg-[#e54e85] text-white rounded-lg font-display font-bold" onClick={handleClick}>Next</button>
                </div>
            </div>
        </div>

    );
}