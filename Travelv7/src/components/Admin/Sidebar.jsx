import { Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiUsers,
  HiDocumentText,
  HiMap,
  HiLogout,
} from "react-icons/hi";

export const NavSidebar = () => {
  return (
    <div className="hidden lg:block px-4 py-6 h-full">
      <Sidebar className="flex-grow">
        <Sidebar.Items className="h-full flex flex-col">
          <div className="flex-grow">
            <Sidebar.ItemGroup className="space-y-4">
              <Sidebar.Item
                href="/admin"
                className="text-[#0EA5E9] hover:text-white hover:bg-[#0EA5E9] font-bold py-3"
              >
                <div className="flex flex-row items-center gap-3">
                  <HiChartPie className="text-2xl" />
                  <p className="text-lg">Overview</p>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/user"
                className="text-[#0EA5E9] hover:text-white hover:bg-[#0EA5E9] font-bold py-3"
              >
                <div className="flex flex-row items-center gap-3">
                  <HiUsers className="text-2xl" />
                  <p className="text-lg">User</p>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/content"
                className="text-[#0EA5E9] hover:text-white hover:bg-[#0EA5E9] font-bold py-3"
              >
                <div className="flex flex-row items-center gap-3">
                  <HiDocumentText className="text-2xl" />
                  <p className="text-lg">Content</p>
                </div>
              </Sidebar.Item>
              <Sidebar.Item
                href="/admin/destination"
                className="text-[#0EA5E9] hover:text-white hover:bg-[#0EA5E9] font-bold py-3"
              >
                <div className="flex flex-row items-center gap-3">
                  <HiMap className="text-2xl" />
                  <p className="text-lg">Destination</p>
                </div>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </div>

          <Sidebar.ItemGroup className="mt-auto">
            <Sidebar.Item
              href="/"
              className="text-[#DC2626] hover:text-white hover:bg-[#DC2626] font-bold py-3"
            >
              <div className="flex flex-row items-center gap-3">
                <HiLogout className="text-2xl" />
                <p className="text-lg">Logout</p>
              </div>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
