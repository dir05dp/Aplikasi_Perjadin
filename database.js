// ============================================================================
// DATABASE.JS - KONFIGURASI FIREBASE CLOUD & DATABASE PEGAWAI
// SATKER PELAKSANAAN JALAN NASIONAL WILAYAH III PROV. SULAWESI SELATAN
// ============================================================================
// TEMPAT MEMASUKKAN URL FIREBASE REALTIME DATABASE ANDA:
// Ganti isi tanda kutip pada FIREBASE_DATABASE_URL di bawah ini dengan URL
// Realtime Database dari Firebase Console Anda.
// Contoh:
// const FIREBASE_DATABASE_URL = "https://spj-pjn3-default-rtdb.asia-southeast1.firebasedatabase.app";
// ============================================================================

const FIREBASE_DATABASE_URL = "https://aplikasi-perjadin-default-rtdb.asia-southeast1.firebasedatabase.app/"; // <-- TEMPEL URL FIREBASE REALTIME DATABASE ANDA DI SINI

const DEFAULT_DATABASE_PEGAWAI = [
  {
    "no": 1,
    "nama": "Malik, ST., MM",
    "nip": "NIP 197012312007011017",
    "pangkat": "Pembina / IV-a",
    "jabatan": "Kepala Satuan Kerja"
  },
  {
    "no": 2,
    "nama": "Nixon Soplantila, SE",
    "nip": "NIP 197006152008121001",
    "pangkat": "Penata / III-c",
    "jabatan": "Pejabat Penandatanganan SPM"
  },
  {
    "no": 3,
    "nama": "Wahyuni, SE",
    "nip": "NIP 197605152014102001",
    "pangkat": "Penata / III-c",
    "jabatan": "Bendahara Pengeluaran"
  },
  {
    "no": 4,
    "nama": "Suarni Awing, S.T., M.T",
    "nip": "NIP 197701152009112001",
    "pangkat": "Penata Tk. I / III-d",
    "jabatan": "Asisten Keuangan, Umum & Pelaporan"
  },
  {
    "no": 5,
    "nama": "Muhammad Ridha, S.E",
    "nip": "NIP 198307132014101001",
    "pangkat": "Penata Muda Tk. I / III-b",
    "jabatan": "Asisten Pengelolaan BMN"
  },
  {
    "no": 6,
    "nama": "Inayah, ST",
    "nip": "NIP 199504132018022003",
    "pangkat": "Penata Muda Tk. I / III-b",
    "jabatan": "Asisten Pelaksanaan & Pengawasan"
  },
  {
    "no": 7,
    "nama": "Hendra, ST",
    "nip": "NIP 198701152010121004",
    "pangkat": "Penata / III-c",
    "jabatan": "Asisten Program, Rencana & Adm. Teknis"
  },
  {
    "no": 8,
    "nama": "Yuni Harjani H, ST. MT",
    "nip": "NIP 197106071999032008",
    "pangkat": "Pembina / IV-a",
    "jabatan": "Petugas Data Teknis Jalan & Jembatan"
  },
  {
    "no": 9,
    "nama": "Tirana Novitri, ST",
    "nip": "NIP 199511062020122007",
    "pangkat": "Penata Muda / III-a",
    "jabatan": "Petugas Data Teknis Jalan & Jembatan"
  },
  {
    "no": 10,
    "nama": "Eri Roki Natanael, ST",
    "nip": "NIP 199608252022031009",
    "pangkat": "Penata Muda / III-a",
    "jabatan": "Petugas Pemantauan Progres Lapangan"
  },
  {
    "no": 11,
    "nama": "A. Baso Asrul Djamil",
    "nip": "NIP 198005132014121003",
    "pangkat": "Pengatur Muda Tk. I / II-b",
    "jabatan": "Petugas Pengawasan Desain Teknik"
  },
  {
    "no": 12,
    "nama": "Yumi Yurinda, SE, MM",
    "nip": "NIP 197905172007012020",
    "pangkat": "Penata Tk. I / III-d",
    "jabatan": "Pengelola Barang Milik Negara"
  },
  {
    "no": 13,
    "nama": "Solihin, AR",
    "nip": "NIP 198101042014101001",
    "pangkat": "Pengatur Muda Tk. I / II-b",
    "jabatan": "Petugas Unit Akuntansi KPA"
  },
  {
    "no": 14,
    "nama": "Sitti Khadijah Niode, SE",
    "nip": "NIP 197403192008122001",
    "pangkat": "Penata Tk. I / III-d",
    "jabatan": "Petugas Pembukuan dan Pembayaran"
  },
  {
    "no": 15,
    "nama": "Henny Taro, S. Sos",
    "nip": "NIP 197808202009112001",
    "pangkat": "Penata / III-c",
    "jabatan": "Petugas E-Monitoring, SiPP & Lakip"
  },
  {
    "no": 16,
    "nama": "Sherly Rauf, S.Sos",
    "nip": "NIP 197206162014122001",
    "pangkat": "Penata / III-c",
    "jabatan": "Petugas Administrasi, Umum, Hukum & Rumah Tangga"
  },
  {
    "no": 17,
    "nama": "Rosmawati Abdullah, Amd",
    "nip": "NIP 196712092009112001",
    "pangkat": "Penata Muda Tk. I / III-b",
    "jabatan": "Petugas Sub Urusan Keuangan"
  },
  {
    "no": 18,
    "nama": "Muhammad Rizal Tutu, SH, MH",
    "nip": "NRP D16121989092018002",
    "pangkat": "Substantif / III-a",
    "jabatan": "Analis Hukum Ahli Pertama"
  },
  {
    "no": 19,
    "nama": "Aqieraah Islamsyah Razak, SH",
    "nip": "NIP 199104022025212049",
    "pangkat": "Golongan IX",
    "jabatan": "Analis Hukum Ahli Pertama"
  },
  {
    "no": 20,
    "nama": "Iswahyudi Kasim Dm, SE",
    "nip": "NIP 197209062025211021",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Layanan Operasional"
  },
  {
    "no": 21,
    "nama": "Andi Nurhaedah, ST",
    "nip": "NIP 197603022025212014",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama"
  },
  {
    "no": 22,
    "nama": "Rachmatia, SE",
    "nip": "NIP 197808042025212013",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Layanan Operasional"
  },
  {
    "no": 23,
    "nama": "Enysiswari Yusuf, ST",
    "nip": "NIP 198106042025212028",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Kelola Jalan Dan Jembatan Ahli Pertama"
  },
  {
    "no": 24,
    "nama": "Taufik Hariono, SE",
    "nip": "NIP 198107292025211037",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Layanan Operasional"
  },
  {
    "no": 25,
    "nama": "Ahmad Mahfud, S.Kom",
    "nip": "NIP 197712042025211017",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Layanan Operasional"
  },
  {
    "no": 26,
    "nama": "Muhammad Takdir, S.Kom",
    "nip": "NIP 198610152025211052",
    "pangkat": "Golongan IX",
    "jabatan": "Pranata Komputer Ahli Pertama"
  },
  {
    "no": 27,
    "nama": "Jeanny Imelda Pattikayhatu, S.Si",
    "nip": "NIP 197506282025212006",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Layanan Operasional"
  },
  {
    "no": 28,
    "nama": "Herman, SE",
    "nip": "NIP 197806082025211028",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Layanan Operasional"
  },
  {
    "no": 29,
    "nama": "Roslinda Baso, S.E",
    "nip": "NIP 197901282025212013",
    "pangkat": "Golongan IX",
    "jabatan": "Penata Layanan Operasional"
  },
  {
    "no": 30,
    "nama": "Riko",
    "nip": "NIP 197912122025211033",
    "pangkat": "Golongan V",
    "jabatan": "Operator Layanan Operasional"
  },
  {
    "no": 31,
    "nama": "Sulham",
    "nip": "NIP 198009022025211022",
    "pangkat": "Golongan V",
    "jabatan": "Operator Layanan Operasional"
  },
  {
    "no": 32,
    "nama": "Murdianto, A.Md",
    "nip": "NIP 197609202025211018",
    "pangkat": "Golongan VII",
    "jabatan": "Pengelola Layanan Operasional"
  },
  {
    "no": 33,
    "nama": "Riskianto",
    "nip": "NIP 199608312025211027",
    "pangkat": "Golongan V",
    "jabatan": "Operator Layanan Operasional"
  },
  {
    "no": 34,
    "nama": "Muhammad Basir",
    "nip": "NIP 197709102025211034",
    "pangkat": "Golongan V",
    "jabatan": "Operator Layanan Operasional"
  },
  {
    "no": 35,
    "nama": "Harmes",
    "nip": "NIP 198106152025211045",
    "pangkat": "Golongan V",
    "jabatan": "Pengadministrasi Perkantoran"
  },
  {
    "no": 36,
    "nama": "Akbar",
    "nip": "NIP 197408062025211025",
    "pangkat": "Golongan V",
    "jabatan": "Pengadministrasi Perkantoran"
  },
  {
    "no": 37,
    "nama": "Seniati Allo Samuel, SE",
    "nip": "NRP D18061977092018001",
    "pangkat": "Substantif / III-a",
    "jabatan": "Penata Keuangan"
  },
  {
    "no": 38,
    "nama": "Hasbudi",
    "nip": "NRP D06061979092018002",
    "pangkat": "Pendukung / II-a",
    "jabatan": "Operator Alat Berat"
  },
  {
    "no": 39,
    "nama": "Irwan AR, ST, MT",
    "nip": "NIP 198301022010121001",
    "pangkat": "Penata Tk. I / III-d",
    "jabatan": "Pejabat Pembuat Komitmen 3.1 Prov. SulSel"
  },
  {
    "no": 40,
    "nama": "Ismail Rahim, ST. MT",
    "nip": "NIP 197903062010121002",
    "pangkat": "Penata / III-c",
    "jabatan": "Pejabat Pembuat Komitmen 3.2 Prov. SulSel"
  },
  {
    "no": 41,
    "nama": "Roslina Tahir, ST, MT",
    "nip": "NIP 197710242009012001",
    "pangkat": "Penata Tk. I / III-d",
    "jabatan": "Pejabat Pembuat Komitmen 3.3 Prov. SulSel"
  },
  {
    "no": 42,
    "nama": "Muh. Alamsyah Irianto Kasim, ST",
    "nip": "NIP 198602052010121002",
    "pangkat": "Penata / III-c",
    "jabatan": "Pejabat Pembuat Komitmen 3.4 Prov. SulSel"
  }
];

const DEFAULT_PEJABAT_REF = [
  {
    "peran": "Kepala Satuan Kerja",
    "sub_jabatan": "",
    "nama": "Malik, ST., MM",
    "nip": "NIP 197012312007011017"
  },
  {
    "peran": "An. Kepala Satuan Kerja",
    "sub_jabatan": "Asisten Keuangan, Umum & Pelaporan",
    "nama": "Haerana, ST",
    "nip": "NIP 197305132009112001"
  }
];
