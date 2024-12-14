import React, { useState } from "react";
import { Table, Pagination } from "flowbite-react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import ConfirmationModal from "../ConfirmationModal";
import { useNavigate } from "react-router-dom";
import TruncatedText from "./TruncatedText";

const ReusableTable = ({
  columns,
  data,
  onDelete,
  actionColumn = true,
  itemsPerPage = 8,
  truncateConfig = {
    description: 50,
    address: 50,
  },
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const renderCell = (column, item) => {
    if (column.render) {
      return column.render(item[column.key]);
    }

    const truncateLength = truncateConfig[column.key];
    if (truncateLength) {
      return (
        <TruncatedText text={item[column.key]} maxLength={truncateLength} />
      );
    }
    return item[column.key];
  };

  const handleRowClick = (item) => {
    if (item.id) {
      navigate(`detail/${item.id}`);
    }
  };

  const handleDeleteConfirm = () => {
    if (selectedItem) {
      onDelete(selectedItem);
      setOpenModal(false);
      setSelectedItem(null);
    }
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <Table className="bg-white rounded-lg" striped hoverable>
          {/* Header Tabel */}
          <Table.Head className="bg-[#0EA5E9] text-white">
            {columns.map((column) => (
              <Table.HeadCell
                key={column.key}
                className={`bg-[#0EA5E9] font-bold ${column.width || ""}`}
              >
                {column.label}
              </Table.HeadCell>
            ))}

            {/* Kolom Aksi Opsional */}
            {actionColumn && (
              <Table.HeadCell className="bg-[#0EA5E9]">
                <span className="sr-only">Actions</span>
              </Table.HeadCell>
            )}
          </Table.Head>

          {/* Body Tabel */}
          <Table.Body className="divide-y">
            {currentItems.map((item, rowIndex) => (
              <Table.Row
                key={rowIndex}
                onClick={() => handleRowClick(item)}
                className="bg-white hover:bg-blue-50 cursor-pointer"
              >
                {/* Render sel berdasarkan kolom */}
                {columns.map((column) => (
                  <Table.Cell
                    key={column.key}
                    className="whitespace-nowrap font-medium text-gray-900"
                  >
                    {renderCell(column, item)}
                  </Table.Cell>
                ))}

                {/* Kolom Aksi Opsional */}
                {actionColumn && (
                  <Table.Cell className="flex space-x-2">
                    {onDelete && (
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrashAlt className="text-xl" />
                      </button>
                    )}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>

      <div className="flex justify-center my-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>

      <ConfirmationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDeleteConfirm}
      />
    </>
  );
};

export default ReusableTable;
