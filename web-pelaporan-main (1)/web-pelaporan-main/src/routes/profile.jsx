import { TableRonda } from "../components/table-ronda";
import { BiCog, BiCamera } from "react-icons/bi";

export const Profile = () => {
  return (
    <main className="bg-primaryBg min-h-screen py-20">
      <div className="container grid gap-10">
        <div className="rounded-[32px] overflow-hidden">
          <div className="header h-[300px] bg-[url('/images/bg-profile.png')] bg-cover bg-center p-8">
            <div className="flex items-center justify-end gap-3 w-full ">
              <button className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                <BiCamera size={36} className="text-secondary-dark-blue" />
              </button>
              <a
                href="/settings"
                className="bg-white rounded-full h-10 w-10 flex items-center justify-center"
              >
                <BiCog size={36} className="text-secondary-dark-blue" />
              </a>
            </div>
          </div>
          <div className="bg-white px-12 pb-12 min-h-[200px]">
            <div className="flex flex-col gap-5 mt-[-60px] absolute">
              <div className="rounded-full h-[120px] w-[120px] bg-slate-500 relative">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <button className="bg-white rounded-full h-8 w-8 flex items-center justify-center absolute right-0 bottom-0">
                  <BiCamera size={24} className="text-secondary-dark-blue" />
                </button>
              </div>
              <div>
                <div className="text-body-medium-24">Haji Ming</div>
                <div className="text-body-medium-20">RT 02 RW 02</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="mx-4 px-6 py-3 border-b border-primary-hijau">
            Data Ronda
          </button>

          <div className="bg-white p-6 mt-4 rounded-[32px]">
            <TableRonda />
          </div>
        </div>
      </div>
    </main>
  );
};
