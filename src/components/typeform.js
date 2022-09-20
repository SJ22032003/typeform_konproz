// import { Widget } from "@typeform/embed-react";
import { PopupButton } from "@typeform/embed-react";

const form_id = "enECYEUz";

export const MyComponent = () => {
  return (
    <PopupButton id={form_id} style={{ fontSize: 20 }} className="my-button">
      Launch
    </PopupButton>
  );
};
