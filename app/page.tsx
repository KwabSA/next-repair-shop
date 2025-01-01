import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">
            {`KwabSA's Computer`} <br /> RepairShop
          </h1>
          <address className="text-gray-300">
            #10 Outer Ring Road <br />
            Accra, Ghana, LTB00233
          </address>
          <p>Opened Daily: 9am - 5pm</p>
          <Link href={`tel:+2332012345678`} className="hover:underline">
            +233 20 123 456 7890
          </Link>
        </div>
      </main>
    </div>
  );
}
