import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="mb-6">
            <h1 className="text-9xl font-extrabold text-blue-500 drop-shadow-md">
              404
            </h1>
            <p className="text-2xl font-semibold text-gray-700 mt-4">
              Halaman Tidak Ditemukan
            </p>
            <p className="text-gray-500 mt-2">
              Maaf, halaman yang Anda cari tidak tersedia.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="w-full inline-block bg-blue-500 text-white py-3 px-6 rounded-lg 
              hover:bg-blue-600 transition duration-300 ease-in-out transform 
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Kembali ke Beranda
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full inline-block bg-gray-100 text-gray-700 py-3 px-6 rounded-lg 
              hover:bg-gray-200 transition duration-300 ease-in-out transform 
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Kembali Sebelumnya
            </button>
          </div>
        </div>

        <div className="bg-blue-50 p-4 text-center text-sm text-gray-600">
          Butuh bantuan?
          <a href="/contact" className="text-blue-500 ml-1 hover:underline">
            Hubungi Dukungan
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
