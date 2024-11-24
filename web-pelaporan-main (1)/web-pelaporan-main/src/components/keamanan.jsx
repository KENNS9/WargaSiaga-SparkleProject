import { BiUpload } from "react-icons/bi";

export const Keamanan = () => {
  return (
    <div className="">
      <div className="mt-10">
        <div className="grid grid-cols-2 mt-3 gap-y-6">
          <div className="col-span-2">
            <div className="text-netral-l-grey text-body-medium-20">Email</div>
            <div className="text-body-medium-30">miinguyeaah@gmail.com</div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">
              Password
            </div>
            <div className="text-body-medium-30">*********</div>
          </div>
          <div>
            <div className="text-netral-l-grey text-body-medium-20">
              Password Baru
            </div>
            <div className="text-body-medium-30">*********</div>
          </div>
          <div className="col-span-2">
            <div className="text-netral-l-grey text-body-medium-20">
              Verifikasi KTP
            </div>
            <div className="bg-[#E5E5EA] h-[200px] rounded-lg flex items-center justify-center">
              <input type="file" id="file-upload" className="hidden" />
              <label
                htmlFor="file-upload"
                className="text-body-medium-20 text-[#89939E] text-center flex items-center gap-2 justify-center"
              >
                <BiUpload />
                Upload File
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
