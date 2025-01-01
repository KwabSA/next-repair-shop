import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <h1>
            {`KwabSA's Computer`} <br /> RepairShop
          </h1>
          <address>
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
