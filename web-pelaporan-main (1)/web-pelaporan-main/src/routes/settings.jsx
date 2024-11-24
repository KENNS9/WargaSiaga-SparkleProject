import { useState } from "react";
import { EditProfile } from "../components/edit-profile";
import { Keamanan } from "../components/keamanan";
import { Iuran } from "../components/iuran";
import clsx from "clsx";
import { Bantuan } from "../components/bantuan";

export const Settings = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const handleActiveTab = (name) => {
    setActiveTab(name);
  };

  return (
    <main className="bg-primaryBg min-h-screen py-20">
      <div className="container">
        <div className="bg-[#F5F7FA] white rounded-[32px] grid grid-cols-12 p-12">
          <div className="col-span-3">
            <div className="flex flex-col gap-4 text-[18px] text-left">              
              <button onClick={() => handleActiveTab('edit-profile')} className={clsx(activeTab === 'edit-profile' ? 'text-primary-hijau text-left' : "text-left text-netral-l-grey")}>Edit Profile</button>
              <button onClick={() => handleActiveTab('keamanan')} className={clsx(activeTab === 'keamanan' ? 'text-primary-hijau text-left' : "text-left text-netral-l-grey")}>Kemanan</button>
              <button onClick={() => handleActiveTab('bantuan')} className={clsx(activeTab === 'bantuan' ? 'text-primary-hijau text-left' : "text-left text-netral-l-grey")}>Bantuan</button>
              <button onClick={() => handleActiveTab('iuran')} className={clsx(activeTab === 'iuran' ? 'text-primary-hijau text-left' : "text-left text-netral-l-grey")}>Iuran</button>
              <button onClick={() => handleActiveTab('logout')} className={clsx(activeTab === 'logout' ? 'text-primary-hijau text-left' : "text-left text-netral-l-grey")}>Logout</button>
            </div>
          </div>
          <div className="col-span-9">
            {activeTab === "edit-profile" && <EditProfile />}
            {activeTab === "keamanan" && <Keamanan />}
            {activeTab === "iuran" && <Iuran />}
            {activeTab === "bantuan" && <Bantuan />}
          </div>
        </div>
      </div>
    </main>
  );
};
