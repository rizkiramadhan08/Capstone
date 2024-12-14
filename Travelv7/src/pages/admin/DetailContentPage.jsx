import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

import PlainCard from "../../components/Admin/PlainCard";
import SelectInput from "../../components/Admin/SelectInput";
import LabelInput from "../../components/Admin/LabelInput";

import { Button } from "flowbite-react";

const DetailContentPage = () => {
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
        title="Add Content"
        description="Add Content Details"
      />
      <div className="flex md:flex-row flex-col my-5 gap-5 bg-white rounded-3xl shadow-lg p-6 w-full">
        <div className="w-2/5 px-5 space-y-6">
          {data.images?.map((image, index) => (
            <img src={image.url} key={image.id} alt={image.id} className="bg-gray-300 w-full h-96" />
          ))}
        </div>
        <div className="space-y-6 w-full px-4">
          <SelectInput
            label="Destination City"
            id="destination_city"
            name="destination_city"
            placeholder={data.city?.name}
          />
          <SelectInput
            label="Category"
            id="category"
            name="category"
            placeholder={data.category}
          />
          <LabelInput
            label="Destination Description"
            name="description"
            type="description"
            value={data.description}
          />
          {data.video_contents?.map((video, index) => (
            <LabelInput
              key={video.id}
              label="Link Content"
              name="link_content"
              type="text"
              value={video.url}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <Button color="blue" onClick={handleBack}>
          Kembali
        </Button>
      </div>
    </div>
  );
};

export default DetailContentPage;
