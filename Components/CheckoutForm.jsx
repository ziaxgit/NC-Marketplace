import ItemCard from "./ItemCard";
import { useNavigate } from "react-router-dom";
import Form, { Input, SubmitButton, Checkbox } from "react-form-component";
import { FormThemeProvider } from "react-form-component";
import { useState } from "react";
import removeItem from "../utils/removeItem";

export default function CheckoutForm({ singlePurchase, setSinglePurchase }) {
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);

  function backToBuyClick() {
    navigate("/");
  }
  const [isShippingBilling, setIsShippingBilling] = useState(true);

  function handleChange(event) {
    setIsShippingBilling(event.shippingBillingMatch);
  }

  function handleSubmit() {
    setIsSuccess(true);
    removeItem(singlePurchase.item_id);
  }

  if (isSuccess) {
    return (
      <div className="success-page">
        <h1>It's on the house!</h1>
        <p>No card details required, we'll cover the fees!</p>
        <ItemCard item={singlePurchase} skipButton={true} />
        <p>Your item will arrive in 3-5 working days!</p>
        <button onClick={backToBuyClick}>Back to Homepage</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Buy now!</h2>
      <ItemCard item={singlePurchase} skipButton={true} />
      <button onClick={backToBuyClick}>I've changed my mind</button>
      <FormThemeProvider
        theme={{
          sizes: { inputWidth: "30em", inputGutterBottom: 10 },
          typography: {
            labelFontSize: 20,
          },
        }}
      >
        <Form
          onChange={handleChange}
          className="form-section"
          fields={[
            "firstName",
            "surname",
            "email",
            "getUpdates",
            "shipping",
            "shipping-postcode",
            "shippingBillingMatch",
            "billing",
            "billing-postcode",
          ]}
          mandatory={[
            "firstName",
            "surname",
            "email",
            "shipping",
            "shipping-postcode",
          ]}
        >
          <h3>Please provide your details</h3>
          <Input name="firstName" label="First Name" placeholder="John" />
          <Input
            name="surname"
            label="Surname"
            placeholder="Smith"
            // value={title}
          />
          <Input
            name="email"
            label="Email"
            placeholder="JohnSmith09@gmail.com"
            type="email"
            // value={title}
          />
          <Checkbox
            label="I would like to receive email updates about new products"
            name="getUpdates"
            initialValue={true}
          />
          <Input
            name="shipping"
            label="Shipping Address"
            placeholder="10 Downing St, London, UK"
            // value={title}
          />
          <Input
            name="shipping-postcode"
            label="Shipping Postcode"
            placeholder="SW1A 2AA"
            // value={title}
          />
          <Checkbox
            label="Is your billing address the same as your shipping address?"
            name="shippingBillingMatch"
            initialValue={true}
          />
          {isShippingBilling ? null : (
            <>
              <Input
                name="billing"
                label="Billing Address"
                placeholder="His Majesty The King, Buckingham Palace, London, UK"
                // value={title}
              />
              <Input
                name="billing-postcode"
                label="Billing Postcode"
                placeholder="SW1A 1AA"
                // value={title}
              />
            </>
          )}
          <SubmitButton onClick={handleSubmit}>Checkout</SubmitButton>
        </Form>
        <br />
        <button onClick={backToBuyClick}>Back to shopping</button>
      </FormThemeProvider>
    </div>
  );
}
