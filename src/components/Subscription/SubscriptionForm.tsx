import React from "react"

export default function SubscriptionForm () {
    const [emailAddress, setEmailAddress] = React.useState<string | null>("example@gmail.com");

    const validateEmail = (email: string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    };

    const errorMessage = React.useMemo(() => {
        const isValidEmail = validateEmail(emailAddress as string);

        if (isValidEmail && emailAddress)
            return null;

        return (
            <div className="error-message text-white">Whoops, make sure it’s an email</div>
        )
    }, [emailAddress])

    return (
        <div className="subscription__form">
            <div className={`subscription__input ${errorMessage ? "error" : ""}`}>
                <input type="text" className={`subscription__email ${errorMessage ? "input-error" : ""}`} placeholder="Enter your email address" onChange={(e) => setEmailAddress(e.target.value)}/>
                {errorMessage}
            </div>
            <button className="btn tertiary-btn full-width">
                Contact Us
            </button>
        </div>
    )
}