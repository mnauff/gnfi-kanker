import { Card, CardDesc, CardTitle } from "@/components/ui/Card";
import Image from "next/image";
import { ChevronsDown } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

const data = [
  {
    imageUrl: "/img/surgery.jpg",
    title: "Pembedahan",
    desc: "Hampir seluruh jenis kanker stadium awal bisa diobati dengan  pembedahan, kadang ditambah radioterapi.",
  },
  {
    imageUrl: "/img/radiotherapy.jpg",
    title: "Radioterapi",
    desc: "Dilakukan dengan sinar laser berkekuatan tinggi untuk membakar sel-sel kanker hingga mati.",
  },
  {
    imageUrl: "/img/chemotherapy.jpg",
    title: "Kemoterapi",
    desc: "Pengobatan zat-zat kimia atau obat-obatan untuk meracuni sel Kanker. Bisa dilakukan sebagai terapi utama atau tambahan.",
  },
  {
    imageUrl: "/img/hormone.jpg",
    title: "Terapi Hormon",
    desc: "Biasa digunakan untuk mengobati kanker yang yang dipicu oleh kelebihan hormon.",
  },
  {
    imageUrl: "/img/target.jpg",
    title: "Terapi Bertarget",
    desc: "Dilakukan dengan obat-obatan untuk menghambat protein atau enzim tertentu yang mendorong pengembangbiakan dan penyebaran tumor.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden text-white">
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[url('/img/cancer.jpg')] bg-cover bg-center px-10">
        <div className="absolute -bottom-1 h-screen w-full bg-gradient-to-t from-[rgb(113_29_176/1)_1%] to-transparent lg:bottom-0" />
        <Heading
          color="#fff"
          className="z-50 mb-5 text-center text-6xl font-bold text-white lg:text-8xl"
        >
          Beragam Cara Mengobati <span className="italic">Kanker</span>
        </Heading>
        <Paragraph className="z-50 text-white">
          Jika hasil pemeriksaan menunjukkan hasil positif kanker, seseorang
          sudah jelas harus beralih ke langkah penting berikutnya:
        </Paragraph>
        <ChevronsDown className="absolute -bottom-[0rem] left-[45%] z-20 h-10 w-10 animate-bounce md:left-1/2" />
      </section>
      <section className="relative min-h-screen w-full space-y-5 bg-[#711DB0] px-10 py-20 text-sm md:px-40 md:py-40 md:text-lg xl:px-80">
        <Paragraph className="relative z-50">
          Memang, tidak semua kanker yang telah terdeteksi dapat disembuhkan.
          Akan tetapi, semakin dini kanker itu ditemukan dan diobati, akan
          semakin besar kemungkinan penderita untuk sembuh. Ada dua tujuan
          pengobatan kanker menurut Yellia Mangan dalam Solusi Sehat Mencegah
          dan Mengatasi Kanker. Pertama, menyembuhkan (kuratif). Pengobatan
          dilakukan demi membebaskan penderita dari kanker untuk selamanya.
          Namun, dia menekankan, penyembuhan hanya berhasil jika kanker yang
          diderita masih stadium dini, termasuk kanker lokoregional,
          penyebarannya belum meluas, dan ukurannya masih kecil. Kedua,
          meringankan (paliatif). Tim medis melakukan pengobatan hanya untuk
          meringankan beban penderita kanker, terutama pasien yang tidak mungkin
          bisa sembuh.
        </Paragraph>
        <Paragraph className="relative z-50">
          Pengobatan dilakukan untuk memperbaiki kualitas hidup, mengatasi
          komplikasi, dan mengurangi atau menghilangkan keluhan penderita,
          misalnya nyeri. Ada berbagai metode pengobatan kanker yang biasa
          dilakukan tim medis. Rostia Chen dalam Solusi Cerdas Mencegah dan
          Mengobati Kanker membagi metode pengobatan kanker ke dalam dua
          kelompok: pengobatan timur dan barat. Pengobatan timur menggunakan
          alat non-medis, seperti tanaman herbal, akupunktur, akupresur,
          homeopati, aromaterapi, terapi musik, yoga, dan meditasi. Sementara
          itu, terapi konvensional yang biasa digunakan para dokter dan tim
          medis di rumah sakit disebut pengobatan barat. Ada 5 metode pengobatan
          konvensional yang umum digunakan praktisi medis antara lain sebagai
          berikut:
        </Paragraph>
        <Image
          src={"/img/ribbon.png"}
          alt=""
          width={500}
          height={500}
          className="absolute right-0 top-80 z-0 rotate-12 scale-150 opacity-50"
        />
        <div className="flex flex-wrap justify-center gap-10">
          {data.map((item, i) => {
            return (
              <Card imageUrl={item.imageUrl} key={i} delay={i / 4}>
                <CardTitle title={item.title} />
                <CardDesc desc={item.desc} />
              </Card>
            );
          })}
        </div>
        <Paragraph>
          Pembedahan termasuk pengobatan tertua dan selalu menjadi rekomendasi
          utama para dokter selama kanker yang diderita pasien masih bisa
          diangkat. Hampir seluruh jenis kanker stadium awal (1—11) dapat
          diobati dengan pembedahan saja atau pembedahan plus radioterapi. Jenis
          pembedahan pun bervariasi. Dokter mungkin hanya perlu mengangkat
          benjolan saja atau bisa juga seluruh organ, misalnya: kanker payudara,
          rahim, dan prostat.
        </Paragraph>
        <Paragraph>
          Tindakan radioterapi dilakukan dengan menggunakan sinar laser
          berkekuatan tinggi untuk membakar sel-sel kanker supaya mati.
          Radioterapi bersifat lokal atau setempat. Jenis pengobatan ini
          biasanya dilakukan sebagai terapi utama atau paliatif, hanya
          mengurangi gejala.
        </Paragraph>
        <Paragraph>
          Radioterapi biasa dilakukan kepada penderita kanker stadium lanjut
          yang sudah tidak dapat dioperasi untuk meringankan gejala, seperti
          mengurangi rasa sakit, menghentikan pendarahan, atau mengurangi
          kerusakan struktur saraf di sekitar tumor. Untuk tujuan ini,
          radioterapi diberikan dalam jangka pendek, misalnya sehari atau satu
          sampai dua minggu.
        </Paragraph>
        <Paragraph>
          Di samping itu, radioterapi juga kerap digunakan sebagai terapi utama
          untuk mengecilkan tumor, lalu dilanjutkan dengan pembedahan. Pada
          kasus ini, radioterapi diberikan dengan interval lebih panjang,
          misalnya jeda 4—6 minggu. Jarak antarpengobatan yang cukup lama
          bertujuan untuk memberikan waktu sel-sel normal untuk memperbaiki
          dirinya.
        </Paragraph>
        <Paragraph>
          Setiap sesi radioterapi biasanya berlangsung antara 1—2 menit. Pasien
          tidak akan merasakan sensasi apa pun saat mesin laser bekerja karena
          teknologi zaman sekarang sudah canggih dan aplikasi yang ada juga
          bermacam ragam.
        </Paragraph>
        <Paragraph>
          Praktik kemoterapi melibatkan penggunaan zat kimia atau obat-obatan
          untuk meracuni sel kanker. Ada tiga tujuan penerapan kemoterapi.
          Pertama, sebagai terapi utama untuk memberantas sel-sel kanker. Kedua,
          sebagai terapi ajuvan (tambahan) untuk memastikan kanker sudah bersih
          dan tidak kembali. Tindakan ini biasanya diberikan kepada pasien yang
          baru menjalani pengangkatan tumor melalui pembedahan atau radioterapi.
        </Paragraph>
        <Paragraph>
          Ketiga, kemoterapi sebagai terapi paliatif. Tindakan ini bertujuan
          untuk mengurangi gejala penderita kanker stadium lanjut (48), ketika
          kanker sudah menyebar ke organ lain. Saat ini, ada lebih dari 50
          obat-obatan kemoterapi yang dapat diberikan melalui infus intravena
          atau tablet oral. Kemoterapi intravena diberikan menggunakan sistem
          siklus dengan interval 3—4 minggu dalam periode 4—6 bulan.
        </Paragraph>
        <Paragraph>
          Terapi hormon biasa digunakan untuk mengobati kanker yang dipicu oleh
          kelebihan hormon, seperti kanker payudara atau kanker prostat.
        </Paragraph>
        <Paragraph>
          Terapi bertarget menggunakan obat-obatan untuk menghambat protein atau
          enzim tertentu yang berperan penting dalam perkembangbiakan dan
          penyebaran tumor. Efek samping terapi ini lebih ringan daripada
          kemoterapi dan tidak merusak sel sehat lain di dalam tubuh.
        </Paragraph>
        <Paragraph>
          Target terapi dapat diberikan melalui infus intravena atau melalui
          tablet dan pil. Contoh obat-obatan yang biasa diberikan dokter kepada
          penderita kanker saat terapi bertarget antara lain: trastuzumab
          (Herceptin) dan erlotinib (Tykerb) untuk kanker payudara serta
          sorafenib (Nexavar) untuk kanker hati atau ginjal.
        </Paragraph>
        <Paragraph>
          Di antara pengobatan kanker yang telah disebutkan, biaya terapi
          bertarget mungkin termasuk paling mahal, sekitar 5.000 dolar AS per
          sesi. Selain itu, waktu pengobatan juga tidak dapat dipastikan.
        </Paragraph>
      </section>
    </main>
  );
}
