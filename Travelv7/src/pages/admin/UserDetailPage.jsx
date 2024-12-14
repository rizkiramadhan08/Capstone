import React from "react";
import { useParams } from "react-router-dom";

import { Avatar, Label, TextInput } from "flowbite-react";
import PlainCard from "../../components/Admin/PlainCard";
import ReusableTable from "../../components/Admin/ReusableTable";

const UserDetailPage = () => {
  const { id } = useParams();

  const columns = [
    { key: "startingCity", label: "Starting City" },
    { key: "destination", label: "City of Destination" },
    { key: "route", label: "Destination Route" },
    { key: "distance", label: "Destination KM Distance" }
  ]

  const data = [
    { startingCity: "Serang", destination: "Yogyakarta", route: "Borobudur Temple", distance: "619 KM"},
    { startingCity: "Serang", destination: "Jakarta", route: "Dufan", distance: "90 KM"},
    { startingCity: "Serang", destination: "Bandung", route: "White Crater", distance: "179 KM"},
    { startingCity: "Serang", destination: "Malang", route: "Museum Angkut", distance: "858 KM"},
    { startingCity: "Serang", destination: "Jakarta", route: "Indonesian Mini Park", distance: "95 KM"},
  ]

  const handleDelete = (item) => {
    console.log("Menghapus:", item)
  }

  return (
    <div className="space-y-5 h-full w-full">
      <PlainCard title="User Details" description="View detailed user data" />
      <div className="bg-white rounded-lg shadow-lg border border-[#E5E7EB]">
        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar
              img=""
              alt="Logo Profile"
              rounded
              className="text-4xl"
              size="xl"
            />
            <form className="w-full space-y-4">
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="username" value="Username" />
                  </div>
                  <TextInput
                    className="w-full"
                    id="username"
                    type="text"
                    placeholder="John Cena"
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Email" />
                  </div>
                  <TextInput
                    className="w-full"
                    id="email"
                    type="email"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="phoneNumber" value="Phone Number" />
                  </div>
                  <TextInput
                    className="w-full"
                    id="phoneNumber"
                    type="number"
                    placeholder="0881231238"
                    required
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="city" value="City" />
                  </div>
                  <TextInput
                    className="w-full"
                    id="city"
                    type="text"
                    placeholder="Serang"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="md:w-1/2 w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="gender" value="Gender" />
                  </div>
                  <TextInput
                    className="w-full"
                    id="gender"
                    type="text"
                    placeholder="Male"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="my-7">
            <ReusableTable columns={columns} data={data} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
