import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Label, Button } from "flowbite-react";
import PlainCard from "../../components/Admin/PlainCard";
import Dropzone from "../../components/Admin/Dropzone";
import LabelInput from "../../components/Admin/LabelInput";
import axiosInstance from "../../api/axiosInstance";

const AddDestinationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    city: "Jakarta",
    position: null,
    address: "",
    operational_hours: "",
    ticket_price: "",
    category: "",
    description: "",
    facilities: [],
    image: [],
    video_contents: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFacilityChange = (facility) => {
    setFormData((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility],
    }));
  };

  const handleImageUpload = (file, index) => {
    const newImages = [...formData.image];
    newImages[index] = file;
    setFormData((prev) => ({
      ...prev,
      image: newImages,
    }));
  };

  const handleRemoveImage = (index) => {
    const newImages = [...formData.image];
    newImages[index] = null;
    setFormData((prev) => ({
      ...prev,
      image: newImages,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const requiredFields = ["name", "address", "category", "description"];
    const missingFields = requiredFields.filter((field) => !formData[field]);
  
    if (missingFields.length > 0) {
      alert(`Harap isi field wajib: ${missingFields.join(", ")}`);
      return;
    }
  
    const payload = {
      name: formData.name,
      city: formData.city,
      address: formData.address,
      category: formData.category,
      description: formData.description,
      ticket_price: Number(formData.ticket_price) || 0,
      facilities: formData.facilities.join(", "),
      operational_hours: formData.operational_hours || "",
      image: formData.image.map(file => file ? file.name : null).filter(Boolean)
    };
  
    try {
      console.log(payload)
      const response = await axiosInstance.post("/destination", payload);
      navigate("/admin/destination");
    } catch (error) {
      console.error("Submission error", error.response?.data);
      alert(error.response?.data?.message || "Gagal menambahkan destinasi");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const availableFacilities = [
    "Toilets",
    "Parking",
    "Food Stalls",
    "Souvenir Shops",
  ];

  return (
    <form onSubmit={handleSubmit}>
      <PlainCard
        className="py-2"
        title="Add Destination"
        description="Add Destination Details"
      />
      <div className="flex flex-col md:flex-row gap-5 my-5 bg-white rounded-3xl shadow-lg p-6">
        <div className="flex flex-col gap-6 w-1/2">
          {[0, 1, 2].map((index) => (
            <div key={index} className="relative">
              <Dropzone
                className="h-48"
                onFileUpload={(file) => handleImageUpload(file, index)}
              />
              {formData.image[index] && (
                <div className="absolute top-2 right-2">
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="bg-red-500 text-white p-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full space-y-6">
          <div className="w-full flex flex-row gap-6">
            <LabelInput
              label="Destination Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
            />
            <LabelInput
              label="Category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full flex flex-row gap-6">
            <LabelInput
              label="Operating Hours"
              name="operational_hours"
              type="text"
              value={formData.operational_hours}
              onChange={handleInputChange}
              placeholder="e.g., 08:00 - 17:00"
            />
            <LabelInput
              label="Entrance Ticket Price"
              name="ticket_price"
              type="text"
              value={formData.ticket_price}
              onChange={handleInputChange}
              placeholder="Price in local currency"
            />
          </div>
          <div className="w-full flex flex-row gap-6">
            <LabelInput
              label="Destination Address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
            />
            <LabelInput
              label="Destination Description"
              name="description"
              type="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Facility</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-1">
              {availableFacilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkbox
                    id={`facility-${index}`}
                    checked={formData.facilities.includes(facility)}
                    onChange={() => handleFacilityChange(facility)}
                  />
                  <Label htmlFor={`facility-${index}`} className="text-base">
                    {facility}
                  </Label>
                </div>
              ))}
            </div>
          </div>
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

export default AddDestinationPage;
