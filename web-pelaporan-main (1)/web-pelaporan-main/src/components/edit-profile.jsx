import { BiCamera } from "react-icons/bi";

export const EditProfile = () => {
  return (
    <div className="">
      <div className="overflow-hidden">
        <div className="rounded-[32px] header h-[300px] bg-[url('/images/bg-profile.png')] bg-cover bg-center p-8"></div>
        <div className="px-12 pb-12">
          <div className="flex flex-col gap-5 mt-[-60px] absolute">
            <div className="rounded-full h-[120px] w-[120px] bg-slate-500">
              <img
                className="h-full w-full object-cover rounded-full"
                src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button className="bg-white rounded-full h-8 w-8 flex items-center justify-center absolute right-0 bottom-0">
                  <BiCamera size={24} className="text-secondary-dark-blue" />
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="font-bold text-header-bold-25">Profil</div>
        <div className="grid grid-cols-2 mt-3 gap-y-6">
          <div>
            <div className="text-netral-l-grey text-body-medium-20">
              Nama Depan
            </div>
            <div className="text-body-medium-30">Miing</div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">
              Nama Belakang
            </div>
            <div className="text-body-medium-30">Miing</div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">Email</div>
            <div className="text-body-medium-30">miinguyeaah@gmail.com</div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">
              Nomor Telepon
            </div>
            <div className="text-body-medium-30">081298762345</div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="font-bold text-header-bold-25">Alamat</div>
        <div className="grid grid-cols-2 mt-3 gap-y-6">
          <div>
            <div className="text-netral-l-grey text-body-medium-20">Alamat</div>
            <div className="text-body-medium-30">
              Jl, Kalimalang Utara No.16
            </div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">RT/RW</div>
            <div className="text-body-medium-30">06/03</div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">
              Kecamatan
            </div>
            <div className="text-body-medium-30">Duren Sawit</div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">
              Kota/Kabupaten
            </div>
            <div className="text-body-medium-30">Jakarta Timur</div>
          </div>
        </div>
      </div>
    </div>
  );
};
