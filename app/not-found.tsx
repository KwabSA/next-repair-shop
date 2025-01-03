import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

const NotFound = () => {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <p>Could not find requested resource</p>

        <Image
          className="m-0 rounded-xl"
          src={`/images/home-img.jpg`}
          width={300}
          height={300}
          sizes="300px"
          alt="page-not-found"
          priority={true}
          title="Page Not Found"
        />
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
