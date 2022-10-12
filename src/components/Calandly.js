import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";

export const Calendly = () => {
    return (
        <InlineWidget
        url="https://calendly.com/shobhit-jaryal"
        styles={{ minWidth: "320px", height: "630px" }}
        />
    );
}

export const CalendlyPopup = () => {
    return (
        <PopupWidget
        url="https://calendly.com/shobhit-jaryal"
        rootElement={document.getElementById("root")}
        />
    );
}