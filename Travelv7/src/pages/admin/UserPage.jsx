import SearchCard from "../../components/Admin/SearchCard";
import Card from "../../components/Admin/Card";
import ReusableTable from "../../components/Admin/ReusableTable";

import { FaUserFriends, FaUser, FaUserMinus } from "react-icons/fa";

const UserPage = () => {

  // Definisi kolom
  const columns = [
    { key: "username", label: "Username" },
    { key: "email", label: "Email" },
    { key: "phone_number", label: "Nomor Telepon" },
    { key: "gender", label: "Gender" },
    { key: "city", label: "City"}
  ];

  // Data contoh
  const productData = [
    {
      id: "1",
      username: "asep123",
      email: "asep@gmail.com",
      phone_number: "088123123131",
      gender: "Laki-laki",
      city: "Serang"
    },
    {
      id: "2",
      username: "rizaltzy",
      email: "rizaltzy@gmail.com",
      phone_number: "083213123123",
      gender: "Laki-laki",
      city: "Serang"
    },
    {
      id: "3",
      username: "kukubima",
      email: "kukubima@gmail.com",
      phone_number: "088131341341",
      gender: "Perempuan",
      city: "Serang"
    },
  ];

  const handleDelete = (item) => {
    console.log('Menghapus:', item);
  };

  return (
    <div>
      <SearchCard topic="User" />
      <div className="flex flex-col md:flex-row w-full gap-5 my-5 md:h-32">
        <Card
          title="Total User"
          totalData={2500}
          icon={<FaUserFriends className="text-3xl" />}
        />
        <Card
          title="User Aktif"
          totalData={2250}
          icon={<FaUser className="text-3xl" />}
        />
        <Card
          title="User Nonaktif"
          totalData={250}
          icon={<FaUserMinus className="text-3xl" />}
        />
      </div>
      <ReusableTable
        columns={columns}
        data={productData}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UserPage;
