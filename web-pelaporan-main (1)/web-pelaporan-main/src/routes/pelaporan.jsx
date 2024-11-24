import { useState } from "react";
import { LaporanCard } from "../components/laporan-card";
import DragNdrop from "../components/uploader-file";

const laporanData = [
  {
    id: 1,
    name: "Bapak Aji",
    time: "02.10",
    address: "Jalan Raya Pantura No.13, Tambun, Bekasi",
    description:
      "Terjadi pencurian di perumahan Bekasi Residence. Pelaku berjumlah dua orang dan berhasil mencuri 2 unit hp, 1 unit laptop, dan sejumlah perhiasan.",
    avatarUrl: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Ibu Siti",
    time: "05.30",
    address: "Jalan Merdeka No.45, Tangerang Selatan",
    description:
      "Kebakaran kecil terjadi di dapur sebuah rumah. Pemilik berhasil memadamkan api sebelum petugas datang.",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Pak Joko",
    time: "08.45",
    address: "Jalan Sudirman No.21, Jakarta Pusat",
    description:
      "Tabrakan beruntun melibatkan tiga kendaraan di lampu merah. Tidak ada korban jiwa, hanya kerusakan material.",
    avatarUrl: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Bu Sri",
    time: "11.20",
    address: "Jalan Veteran No.12, Bandung",
    description:
      "Hilangnya dompet di dalam angkutan umum. Pemilik melaporkan kejadian kepada pihak keamanan setempat.",
    avatarUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Pak Agus",
    time: "13.50",
    address: "Jalan Diponegoro No.33, Yogyakarta",
    description:
      "Anjing peliharaan hilang dari halaman rumah. Pemilik meminta bantuan warga sekitar untuk mencarinya.",
    avatarUrl: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Bu Lestari",
    time: "16.15",
    address: "Jalan Cendana No.19, Surabaya",
    description:
      "Laporan tentang pohon tumbang yang menghalangi jalan utama setelah hujan deras.",
    avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Pak Ridwan",
    time: "18.40",
    address: "Jalan Malabar No.7, Semarang",
    description:
      "Sepeda motor hilang dari parkiran sebuah minimarket. Rekaman CCTV sedang diperiksa.",
    avatarUrl: "https://images.pexels.com/photos/29463650/pexels-photo-29463650/free-photo-of-portrait-of-a-stylish-man-holding-cigarette-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Bu Kartini",
    time: "20.25",
    address: "Jalan Kemuning No.22, Bali",
    description:
      "Seorang anak hilang saat bermain di pantai. Polisi dan warga melakukan pencarian.",
    avatarUrl: "https://images.pexels.com/photos/4040906/pexels-photo-4040906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    name: "Pak Dedi",
    time: "22.00",
    address: "Jalan Mangga No.5, Medan",
    description:
      "Laporan tentang suara mencurigakan dari rumah kosong. Polisi memeriksa lokasi.",
    avatarUrl: "https://images.pexels.com/photos/29446511/pexels-photo-29446511/free-photo-of-moody-portrait-with-shadow-and-light-contrast.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 10,
    name: "Bu Rina",
    time: "23.55",
    address: "Jalan Kelapa No.18, Makassar",
    description:
      "Kebakaran kecil di tempat sampah dekat rumah warga. Api berhasil dipadamkan sebelum menyebar.",
    avatarUrl: "https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageUrl:
      "https://images.pexels.com/photos/1031698/pexels-photo-1031698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const Pelaporan = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    alamat: "",
    kronologi: "",
    bukti: null,
  });

  // Validation logic
  const isFormValid =
    formData.name.trim() &&
    formData.alamat.trim() &&
    formData.kronologi.trim() &&
    formData.bukti.length;

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle file selection from DragNdrop
  const handleFileSelect = (file) => {
    setFormData((prev) => ({ ...prev, bukti: file }));
  };

  const handleSubmit = () => {
    if (!isFormValid) return;
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="bg-primaryBg min-h-screen">
      <div className="container py-16 grid grid-cols-2 gap-10">
        <div>
          <div>
            <h2 className="text-2xl font-bold">Kemarin</h2>
            <div className="mt-4 space-y-3 max-h-[300px] overflow-auto">
              {laporanData.slice(0, 5).map((data) => (
                <LaporanCard
                  key={data.id}
                  name={data.name}
                  time={data.time}
                  address={data.address}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  avatarUrl={data.avatarUrl}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-2xl font-bold">Jumat, 14 Juni 2024</h2>
            <div className="mt-4 space-y-3 max-h-[300px] overflow-auto">
              {laporanData.slice(5, 10).map((data) => (
                <LaporanCard
                  key={data.id}
                  name={data.name}
                  time={data.time}
                  address={data.address}
                  description={data.description}
                  imageUrl={data.imageUrl}
                  avatarUrl={data.avatarUrl}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="w-full bg-white rounded-2xl shadow-main py-8 px-6 space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-lg" htmlFor="name">
                Nama
              </label>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Masukkan Nama"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg" htmlFor="alamat">
                Alamat
              </label>
              <input
                type="text"
                className="input"
                id="alamat"
                placeholder="Masukkan Alamat"
                value={formData.alamat}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg" htmlFor="kronologi">
                Kronologi
              </label>
              <textarea
                className="input"
                id="kronologi"
                placeholder="Ceritakan kronologinya"
                value={formData.kronologi}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg" htmlFor="bukti">
                Unggah Bukti
              </label>
              <DragNdrop onFilesSelected={handleFileSelect} />
            </div>
            <div className="flex flex-col gap-2">
              <button
                className={`bg-primary-shade-5 text-white text-body-medium-13 px-20 py-3 mx-auto rounded-md w-fit ${
                  !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!isFormValid}
                onClick={handleSubmit}
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
