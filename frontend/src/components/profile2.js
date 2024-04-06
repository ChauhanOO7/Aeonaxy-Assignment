import {useState,useRef} from 'react';
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";

export default function Profile2() {

    const {username}=useParams();
    const navigate=useNavigate();
    const check1=useRef();
    const check2=useRef();
    const check3=useRef();
    const [data_check1,setData1]=useState("");
    const [data_check2,setData2]=useState("");
    const [data_check3,setData3]=useState("");
    const [show,setShow]=useState(false);
    const [error,setError]=useState(false);

    function handleChange(e)
    {
        setShow(true);
        setData1(e.target.id);
        return;
    }

    function handleChange1(e)
    {
        setShow(true);
        setData2(e.target.id);
        return;
    }

    function handleChange2(e)
    {
        setShow(true);
        setData3(e.target.id);
        return;
    }

    async function handleClick()
    {
        if(!check1.current.checked && !check2.current.checked && !check3.current.checked)
        {
            setError(true);
            setShow(false);
            return;
        }
        
        const store=[];
        if(data_check1!=="")   store.push(data_check1);
        if(data_check2!=="")   store.push(data_check2);
        if(data_check3!=="")   store.push(data_check3);

        const response=await axios.post("https://backendprofile.vercel.app/signup/update",{username:username,data:store});

        navigate(`/email/${username}`);

    }

    return (
      <div className="bg-white mt-10 sm:py-30">
        <h1 className="mb-10 pb-10 text-[#e54e85] text-xl ml-7 font-bold text-2xl">dribbble</h1>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What brings you to Dribble?</h2>
            <p className="mt-2 text-base leading-8 text-gray-600 text-center">
              Select the options that best describe you. Don't worry, you can explore other options later.
            </p>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article className="flex max-w-xl flex-col items-start justify-between shadow-xl">
                <div className="flex items-center gap-x-4 text-xs">
                    <img className="h-64 w-96" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h1 className="font-bold text base mt-2 mb-2 w-full text-center">I'm a designer looking to share my work</h1>
                <input className="w-full mb-2" id="I'm a designer looking to share my work" type="checkbox" ref={check1} onChange={handleChange}/>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between shadow-xl">
                <div className="flex items-center gap-x-4 text-xs">
                    <img className="h-64 w-96" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h1 className="font-bold text base mt-2 w-full text-center">I'm looking to hire a designer</h1>
                <input  className="w-full mb-2" id="I'm looking to hire a designer" type="checkbox" ref={check2} onChange={handleChange1}/>
              </article>

              <article className="flex max-w-xl flex-col items-start justify-between shadow-xl">
                <div className="flex items-center gap-x-4 text-xs">
                    <img className="h-64 w-96" src="https://plus.unsplash.com/premium_photo-1661389360947-a4d0f67b2941?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <h1 className="font-bold text base mt-2 w-full text-center">I'm looking for design inspiration</h1>
                <input  className="w-full mb-2" id="I'm looking for design inspiration" type="checkbox" ref={check3} onChange={handleChange2}/>
              </article>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            {show?<p>Anything else? You can select multiple</p>:""}
            {error && !show?<label className="mb-2 text-red-500">Please select atleast One!</label>:""}
            <button className="mt-1 px-20 py-2 bg-[#e54e85] text-white rounded-lg" onClick={handleClick}>Finish</button>
          </div>
        </div>

      </div>
    )
  }