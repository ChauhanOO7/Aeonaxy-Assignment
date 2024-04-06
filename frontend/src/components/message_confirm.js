import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Confirm(props)
{
    return (
        <div className="mt-10 mb-5 lg:mx-80 text-center">
            <h1 className="text-2xl mb-2 font-bold">Thank you for your time.</h1>
            <FontAwesomeIcon icon="fa-solid fa-envelope-circle-check"  size="5x" />
            <p>We've send a email to:</p>
            <h2><strong>{props.email}</strong></h2>
            <p>Didn't recieve the email? Check your Spam folder, it may have been caught by a filter.</p>
        </div>
    );
}