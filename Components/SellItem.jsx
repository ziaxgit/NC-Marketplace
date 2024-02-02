import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormThemeProvider } from "react-form-component";
import React from "react";
import Form, {
  Input,
  SubmitButton,
  Select,
  TextArea,
  ImageUpload,
} from "react-form-component";
import postItem from "../utils/postItem";

export default function SellItem() {
  const navigate = useNavigate();
  const [itemInfo, setItemInfo] = useState({
    item_name: "",
    description: "",
    price: "",
    img_url: "",
    category_name: "",
  });
  const [isError, setIsError] = useState(false);
  const [errorInfo, setErrorInfo] = useState({});

  function backToBuyClick() {
    navigate("/");
  }

  function handleSubmit(event) {
    console.dir(event, "<<<< EVENT");
    setItemInfo({
      ...itemInfo,
      item_name: event.title,
      description: event.description ? event.description : "",
      price: event.price,
      img_url: event.image,
      category_name: event.category ? event.category : "",
    });
    console.log(itemInfo, "<<< ITEM INFO");
    postItem(itemInfo)
      .then((data) => {})
      .catch((err) => {
        setIsError(true);
        setErrorInfo({ ...err });
      });
  }

  if (isError) {
    return (
      <div className="error-page">
        <h1>
          {errorInfo.code} <br /> {errorInfo.message}
        </h1>
        <button onClick={backToBuyClick}>Back to Homepage</button>
      </div>
    );
  }
  return (
    <FormThemeProvider
      theme={{
        sizes: { inputWidth: "30em", inputGutterBottom: 10 },
        typography: {
          labelFontSize: 20,
        },
      }}
    >
      <Form
        className="form-section"
        fields={["title", "description", "category", "price", "image"]}
        mandatory={["title", "price", "image"]}
      >
        <h2>Sell your item 🤑</h2>
        <Input
          name="title"
          label="Item title"
          placeholder="Item Name"
          // value={itemInfo.title}
          // onChange={handleChange}
        />
        <TextArea
          name="description"
          label="Item Description"
          placeholder="Describe your item"
          // value={itemInfo.description}
          // onChange={handleChange}
        />
        <Select
          name="category"
          label="Category"
          options={[
            { label: "Electronics", value: "Electronics" },
            { label: "Household", value: "Household" },
            { label: "Clothing", value: "Clothing" },
          ]}
          // value={itemInfo.category}
          // onChange={handleChange}
        />
        <Input
          name="price"
          type="number"
          label="Price"
          placeholder="9999"
          suffix="pence (GBP)"
        />
        {/* <ImageUpload
          label="Image upload"
          name="image"
          placeholder=""
          value={itemInfo.img_url}
          // onChange={handleChange}
        /> */}
        <Input
          name="image"
          label="Or enter image url"
          placeholder="Image url"
          // value={itemInfo.img_url}
        />
        <SubmitButton onClick={handleSubmit}>List Item</SubmitButton>
      </Form>
      <br />
      <button onClick={backToBuyClick}>Back to shopping</button>
    </FormThemeProvider>
  );
}
