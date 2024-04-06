import Navbar from "./navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Confirm from "./message_confirm";
import Reject from "./message_reject";
import {useState,useEffect,useRef} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Email()
{
    const {username}=useParams();
    const [message,setMessage]=useState(true);
    const [display,setDisplay]=useState({});
    const count=useRef(0);

    useEffect(()=>{

        async function getalldata()
        {
            const response=await axios.post("https://backendprofile.vercel.app/signup/getdata",{username:username});
            const response_data=response.data.username;
            setDisplay(response_data);
            if(count.current===0)
            {
                const status=await axios.post("https://backendprofile.vercel.app/sendmail",{Email:response_data.Email});
                if(status.data.send)
                {
                    setMessage(true);
                    count.current=1;
                }
                else
                {
                    if(count.current===0)
                    {
                        setMessage(false);
                    }
                    count.current=0;
                }
            }

        }

        getalldata();

    },[]);
    return (

        <div>

            <Navbar image={display.image_url}/>

            {message ? <Confirm email={display.Email ? display.Email : "Loading..."}/> : <Reject/>}
            <div className="text-center lg:text-left lg:flex lg:mt-20 lg:pt-10 lg:mx-10">
                <div className="text-sm lg:w-1/5">
                    <h2 className="text-[#e54e85] text-xl mb-2 font-bold">dribbble</h2>
                    <p className="mb-2">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                    <FontAwesomeIcon className="mr-2" icon="fa-brands fa-instagram" />
                    <FontAwesomeIcon className="mr-2" icon="fa-brands fa-twitter" />
                    <FontAwesomeIcon className="mr-2" icon="fa-brands fa-square-facebook" />
                </div>
                <div className="text-sm lg:w-1/5 lg:pl-5 text-gray-500">
                    <h2 className="text-black font-semibold lg:mt-1">For designers</h2>
                    <p className="mb-2 mt-2">Go Pro!</p>
                    <p className="mb-2 mt-2">Explore design work</p>
                    <p className="mb-2 mt-2">Design blog</p>
                    <p className="mb-2 mt-2">Overtime podcast</p>
                </div>
                <div className="text-sm lg:w-1/5 text-gray-500">
                    <h2 className="text-black font-semibold lg:mt-1">Hire designers</h2>
                    <p className="mb-2 mt-2">Post a job opening</p>
                    <p className="mb-2 mt-2">Post a freelance project</p>
                    <p className="mb-2 mt-2">Search for designers</p>
                    <h2 className="text-black font-semibold">Brands</h2>
                    <p className="mb-2 mt-2">Advertise with us</p>
                </div>
                <div className="text-sm lg:w-1/5 text-gray-500">
                    <h2 className="text-black font-semibold lg:mt-1">Company</h2>
                    <p className="mb-2 mt-2">About</p>
                    <p className="mb-2 mt-2">Careers</p>
                    <p className="mb-2 mt-2">Support</p>
                    <p className="mb-2 mt-2">Media kit</p>
                    <p className="mb-2 mt-2">Testimonials</p>
                    <p className="mb-2 mt-2">Api</p>
                </div>
                <div className="text-sm lg:w-1/5 text-gray-500">
                    <h2 className="text-black font-semibold lg:mt-1">Directories</h2>
                    <p className="mb-2 mt-2">Design jobs</p>
                    <p className="mb-2 mt-2">Designers for hire</p>
                    <p className="mb-2 mt-2">Tags</p>
                    <p className="mb-2 mt-2">Places</p>
                    <h2 className="text-black font-semibold">Design assets</h2>
                    <p className="mb-2 mt-2">Dribbble Marketplace</p>
                    <p className="mb-2 mt-2">Creative Market</p>
                    <p className="mb-2 mt-2">Fontspring</p>
                    <p className="mb-2 mt-2">Font Squirrel</p>
                </div>
                <div className="text-sm lg:w-1/5 lg:pl-4 text-gray-500">
                    <h2 className="text-black font-semibold lg:mt-1">Design Resources</h2>
                    <p className="mb-2 mt-2">Freelancing</p>
                    <p className="mb-2 mt-2">Design Hiring</p>
                    <p className="mb-2 mt-2">Design Portfolio</p>
                    <p className="mb-2 mt-2">Design Education</p>
                    <p className="mb-2 mt-2">Creative Process</p>
                    <p className="mb-2 mt-2">Design Industry Trends</p>
                </div>
            </div>
            <div>
                <p className="text-center bg-black text-white lg:text-black lg:bg-white lg:text-left text-gray-500 lg:mx-10 text-sm">2024 Dribbble. All rights reserved.</p>
            </div>
        </div>
    );
}