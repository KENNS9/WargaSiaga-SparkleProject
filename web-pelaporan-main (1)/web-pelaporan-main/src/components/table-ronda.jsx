export const TableRonda = () => {
  const rondaData = [
    {
      lokasi: "Pos 1",
      tanggal: "28/10/2024",
      status: "Tidak Selesai",
      laporan: "Tidak ada",
    },
    {
      lokasi: "Pos 2",
      tanggal: "27/10/2024",
      status: "Selesai",
      laporan: "Tidak ada",
    },
    {
      lokasi: "Pos 3",
      tanggal: "26/10/2024",
      status: "Selesai",
      laporan: "Laporan diterima",
    },
    {
      lokasi: "Pos 4",
      tanggal: "25/10/2024",
      status: "Tidak Selesai",
      laporan: "Tidak ada",
    },
    {
      lokasi: "Pos 5",
      tanggal: "24/10/2024",
      status: "Selesai",
      laporan: "Laporan lengkap",
    },
    {
      lokasi: "Pos 6",
      tanggal: "23/10/2024",
      status: "Tidak Selesai",
      laporan: "Tidak ada",
    },
    {
      lokasi: "Pos 7",
      tanggal: "22/10/2024",
      status: "Selesai",
      laporan: "Laporan diterima",
    },
    {
      lokasi: "Pos 8",
      tanggal: "21/10/2024",
      status: "Tidak Selesai",
      laporan: "Tidak ada",
    },
    {
      lokasi: "Pos 9",
      tanggal: "20/10/2024",
      status: "Selesai",
      laporan: "Tidak ada",
    },
    {
      lokasi: "Pos 10",
      tanggal: "19/10/2024",
      status: "Tidak Selesai",
      laporan: "Laporan ditolak",
    },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-primary-hijau">
          <th>Lokasi</th>
          <th>Tanggal</th>
          <th>Status</th>
          <th>Laporan</th>
        </tr>
      </thead>
      <tbody>
        {rondaData.map((data, index) => (
          <tr key={index} className="text-center">
            <td>{data.lokasi}</td>
            <td>{data.tanggal}</td>
            <td>{data.status}</td>
            <td>{data.laporan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
