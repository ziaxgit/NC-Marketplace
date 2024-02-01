import { useState } from "react";
import { FormThemeProvider } from "react-form-component";
import React from "react";
import ReactDOM from "react-dom";
import Form, {
  Input,
  Select,
  FormButton,
  ImageUpload,
} from "react-form-component";

export default function SellItem() {
  return (
    <FormThemeProvider theme={{ sizes: { inputWidth: "25%" } }}>
      <Form fields={["name", "type"]}>
        <Input className="" name="title" label="Item title" />
        <Input
          className="description-field"
          name="description"
          label="Item Description"
        />
        <Input className="input-field" name="Category" label="Category" />
        <Input
          className="input-field"
          name="price"
          type="number"
          label="Price"
        />
        <ImageUpload label="Image upload" name="example" placeholder="" />
        <FormButton onClick={(fields) => console.log(fields)}>Save</FormButton>
      </Form>
    </FormThemeProvider>
  );
}
