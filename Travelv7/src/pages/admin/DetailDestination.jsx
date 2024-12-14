import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Checkbox, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import PlainCard from "../../components/Admin/PlainCard";
import Dropzone from "../../components/Admin/Dropzone";
import LabelInput from "../../components/Admin/LabelInput";
import axiosInstance from "../../api/axiosInstance";

const DetailDestination = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/destination/${id}`);
        const data = response.data.destination;
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <PlainCard
        className="py-2"
        title="Add Destination"
        description="Add Destination Details"
      />
      <div className="flex flex-col md:flex-row gap-5 my-5 bg-white rounded-3xl shadow-lg p-6">
        <div className="flex flex-col gap-6 w-1/2">
          {data.images?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Destination image ${index + 1}`}
              className="w-full h-64"
            />
          ))}
        </div>
        <div className="w-full space-y-6">
          <div className="w-full flex flex-row gap-6">
            <LabelInput
              label="Destination Name"
              labelValue="destination"
              type="text"
              value={data.name}
            />
            <LabelInput
              label="Category"
              labelValue="category"
              type="text"
              value={data.category}
            />
          </div>
          <div className="w-full flex flex-row gap-6">
            <LabelInput
              label="Operating Hours"
              labelValue="operational_hours"
              type="text"
              value={data.operational_hours}
            />
            <LabelInput
              label="Entrance Ticket Price"
              labelValue="ticket_price"
              type="text"
              value={data.ticket_price}
            />
          </div>
          <div className="w-full flex flex-row gap-6">
            <LabelInput
              label="Destination Address"
              labelValue="address"
              type="text"
              value={data.address}
            />
            <LabelInput
              label="Destination Description"
              labelValue="description"
              type="text"
              value={data.description}
            />
          </div>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
            {data.images?.map((image, index) => (
              <LabelInput
                key={index}

                label="Link Image"
                labelValue="url"
                type="text"
                value={image.url}
              />
            ))}
            <div>
              <h2 className="text-xl font-semibold mb-2">Facility</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-1">
                {data.facilities?.map((facility, index) => (
                  <div className="space-x-3" key={index}>
                    <Checkbox
                      key={index}
                      id={`facility-${index}`}
                      checked
                      disabled
                    />
                    <Label className="text-base">{facility}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleBack}
          className="text-white py-2 px-4 rounded-lg bg-[#0EA5E9]"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DetailDestination;
