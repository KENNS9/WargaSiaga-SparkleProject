import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const LaporanCard = ({ name, time, address, description, imageUrl, avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Card Header */}
      <div className="bg-white rounded-[12px] border border-netral-l-grey p-[14px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Profile Placeholder */}
          <div className="profile w-[60px] h-[60px] rounded-full bg-slate-200 overflow-hidden">
            <img className="h-full w-full object-cover" src={avatarUrl} alt="Profile" /> 
          </div>
          <div className="text-body-medium-20">{name}</div>
        </div>
        <div className="flex items-end flex-col gap-2">
          <div className="text-body-medium-20 text-netral-l-grey">{time}</div>
          <button
            onClick={handleClick}
            className="px-3 py-2 rounded-md bg-primary-tint-1 text-white text-body-regular-12"
          >
            {isOpen ? "Tutup detail" : "Lihat detail"}
          </button>
        </div>
      </div>

      {/* Detail Card */}
      {isOpen && (
        <div className="bg-white rounded-[12px] border border-netral-l-grey p-[14px] flex gap-2 mt-4">
          <div>
            {/* Image */}
            <img
              className="aspect-video rounded-[10px] bg-slate-500 h-[140px]"
              src={imageUrl || "https://via.placeholder.com/140"}
              alt="Incident location"
            />
          </div>
          <div>
            {/* Address */}
            <div className="text-body-medium-13 mb-1">{address}</div>
            {/* Description */}
            <p className="text-body-regular-12">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
