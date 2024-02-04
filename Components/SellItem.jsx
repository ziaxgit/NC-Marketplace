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
import ItemCard from "./ItemCard";

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function backToBuyClick() {
    navigate("/");
  }

  function handleChange(event) {
    setItemInfo({
      item_name: event.title,
      description: event.description,
      price: event.price,
      img_url: event.image,
      category_name: event.category,
    });
  }

  function handleSubmit() {
    postItem(itemInfo)
      .then((data) => {
        setIsSuccess(true);
        console.log(data);
        setListedItem({ data });
      })
      .catch((err) => {
        setIsError(true);
        setErrorInfo({ ...err });
      });
  }

  if (isSuccess) {
    return (
      <div className="success-page">
        <h1>Successfully listed!</h1>
        <ItemCard item={itemInfo} skipButton={true} />
        <button onClick={backToBuyClick}>Back to Homepage</button>
      </div>
    );
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
        onChange={handleChange}
        className="form-section"
        fields={["title", "description", "category", "price", "image"]}
        mandatory={["title", "price", "image"]}
      >
        <h2>Sell your item 🤑</h2>
        <Input
          name="title"
          label="Item title"
          placeholder="Item Name"
          value={title}
          onChange={handleChange}
        />
        <TextArea
          name="description"
          label="Item Description"
          placeholder="Describe your item"
          value={description}
          onChange={handleChange}
        />
        <Select
          name="category"
          label="Category"
          options={[
            { label: "Electronics", value: "Electronics" },
            { label: "Household", value: "Household" },
            { label: "Clothing", value: "Clothing" },
          ]}
          value={category}
          onChange={handleChange}
        />
        <Input
          name="price"
          type="number"
          label="Price"
          placeholder="9999"
          suffix="pence (GBP)"
          value={price}
          onChange={handleChange}
        />
        {/* <ImageUpload label="Image upload" placeholder="" /> */}
        <Input
          type="url"
          name="image"
          label="Enter image url"
          placeholder="Image url"
          value={imgUrl}
          onChange={handleChange}
        />
        <SubmitButton onClick={handleSubmit}>List Item</SubmitButton>
      </Form>
      <br />
      <button onClick={backToBuyClick}>Back to shopping</button>
    </FormThemeProvider>
  );
}
