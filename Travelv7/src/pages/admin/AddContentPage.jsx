import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlainCard from "../../components/Admin/PlainCard";
import SelectInput from "../../components/Admin/SelectInput";
import LabelInput from "../../components/Admin/LabelInput";
import Dropzone from "../../components/Admin/Dropzone";
import { Button } from "flowbite-react";

const AddContentPage = () => {
  const [formData, setFormData] = useState({
    destination_city: "",
    category: "",
    description: "",
    link_content: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi form
    if (!formData.destination_city || !formData.description) {
      alert("Please fill in required fields");
      return;
    }

    // Kirim data form
    const formSubmitData = new FormData();
    Object.keys(formData).forEach((key) => {
      formSubmitData.append(key, formData[key]);
    });

    // Contoh pengiriman data (ganti dengan endpoint aktual Anda)
    fetch("/api/add-content", {
      method: "POST",
      body: formSubmitData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Reset form atau navigasi
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <PlainCard
        className="py-2"
        title="Add Content"
        description="Add Content Details"
      />
      <div className="flex md:flex-row flex-col my-5 gap-5 bg-white rounded-3xl shadow-lg p-6 w-full">
        <div className="w-2/5 px-5">
          <Dropzone className="h-96" onFileUpload={() => console.log("hi")} />
        </div>
        <div className="space-y-6 w-full px-4">
          <SelectInput
            label="Destination City"
            id="destination_city"
            name="destination_city"
            value={formData.destination_city}
            onChange={handleInputChange}
          />
          <SelectInput
            label="Category"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
          <LabelInput
            label="Destination Description"
            name="description"
            type="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <LabelInput
            label="Link Content"
            name="link_content"
            type="text"
            value={formData.link_content}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <Button color="gray" onClick={handleBack}>
          Kembali
        </Button>
        <Button type="submit" color="blue">
          Simpan
        </Button>
      </div>
    </form>
  );
};

export default AddContentPage;
