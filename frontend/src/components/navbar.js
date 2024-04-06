import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar(props)
{
    return (
        <nav className="lg:flex">
            <h2 className='mt-2 text-2xl mx-40 lg:mx-0 pl-10 lg:pl-0 lg:mx-4 lg:my-2'>dribbble</h2>
            <ul className='mx-40 lg:mx-0 pl-10 lg:pl-0 lg:w-2/5 lg:flex my-3 lg:justify-between text-gray-500'>
                <li>Inspiration</li>
                <li>Find Work</li>
                <li>Learn design</li>
                <li>Go Pro</li>
                <li>Hire Designers</li>
            </ul>
            <ul className='text-center lg:text-left mx-40 lg:mx-0 pl-10 lg:pl-0 lg:flex lg:my-3 lg:ms-96'>
                <div className='flex'>
                    <input type="text" placeholder="Search"/>
                    <FontAwesomeIcon className="mt-3" icon="fa-solid fa-magnifying-glass" />
                </div>
                <img className="w-10 h-10 rounded-full mb-4 mt-4 lg:mb-0 lg:ml-2 lg:mt-0" src={props.image} alt="" />
                <button className='mr-10 lg:mr-0 lg:ms-8 w-24 py-2  bg-[#e54e85] text-white rounded-lg mt-5"'>Upload</button>
            </ul>
        </nav>
    );
}