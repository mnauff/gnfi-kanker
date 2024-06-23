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
      </section>
    </main>
  );
}
