import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormThemeProvider } from "react-form-component";
import React from "react";
import ReactDOM from "react-dom";
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
  const [itemInfo, setItemInfo] = useState({});

  function backToBuyClick() {
    navigate("/");
  }
  function handleChange(event) {
    setItemInfo({
      item_name: event.title,
      description: event.description ? event.description : null,
      img_url: event.image.data,
      price: event.price,
      category_name: event.category ? event.category : null,
    });
  }
  function handleSubmit(event) {
    handleChange(event);
    postItem(itemInfo);
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
          onChange={handleChange}
        />
        <TextArea
          className="description-field"
          name="description"
          label="Item Description"
          placeholder="Describe your item"
        />
        <Select
          className="input-field"
          name="category"
          label="Category"
          options={[
            { label: "Electronics", value: "Electronics" },
            { label: "Household", value: "Household" },
            { label: "Clothing", value: "Clothing" },
          ]}
        />
        <Input
          className="input-field"
          name="price"
          type="integer"
          label="Price"
          placeholder="9999"
          suffix="pence (GBP)"
        />
        <ImageUpload
          className="image-upload"
          label="Image upload"
          name="image"
          placeholder=""
        />
        <SubmitButton onClick={handleSubmit}>List Item</SubmitButton>
      </Form>
      <br />
      <button onClick={backToBuyClick}>Back to shopping</button>
    </FormThemeProvider>
  );
}
