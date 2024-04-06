import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reject()
{
    return (
        <div className="mt-10 mb-5 lg:mx-80 text-center lg:py-10">
            <h1 className="text-4xl">Request Failed Reload the page after sometime...</h1>
            <FontAwesomeIcon icon="fa-solid fa-envelope" size="5x" />
        </div>
    );
}