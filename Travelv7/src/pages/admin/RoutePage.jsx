import { useParams } from "react-router-dom";
import SearchCard from "../../components/Admin/SearchCard";
import Card from "../../components/Admin/Card";
import ReusableTable from "../../components/Admin/ReusableTable";

import { FaArrowUp } from "react-icons/fa6";

const RoutePage = () => {
  const { section } = useParams();

  const column = [
    { key: "username", label: "Username" },
    { key: "city", label: "City" },
    { key: "rute", label: "Rute Destinasi" },
    { key: "harga", label: "Harga Tiket Masuk" },
  ];

  const data = [
    {
      username: "rizaltzy",
      city: "Serang",
      rute: "Candi Borobudur",
      harga: "Rp.80.000",
    },
  ];

  const handleDelete = (item) => {
    console.log("Menghapus:", item);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 flex">
          <Card
            title="Total Route Users"
            totalData={179}
            icon={<FaArrowUp className="text-2xl" />}
            className="flex-grow"
          />
        </div>
        <div className="w-full flex">
          <SearchCard topic={section} className="flex-grow" />
        </div>
      </div>
      <div className="my-5">
        <ReusableTable columns={column} data={data} onDelete={handleDelete}/>
      </div>
    </div>
  );
};

export default RoutePage;
