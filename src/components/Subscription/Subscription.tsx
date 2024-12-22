import SubscriptionForm from "./SubscriptionForm";
import SubscriptionHeader from "./SubscriptionHeader";

export default function Subscription () {
    return (
        <div className="subscription__container">
            <SubscriptionHeader />
            <SubscriptionForm />
        </div>
    )
}