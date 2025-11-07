import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found – KHM Logistics",
  description: "This page could not be found on KHM Logistics.",
  openGraph: {
    title: "404 – Page Not Found",
    description: "The requested page does not exist.",
    url: "https://www.khmlogistics.com/404",
  },
};

export default function ErrorPage() {
return (
    <>
     
     <section
      className="relative flex flex-col items-center justify-center h-screen text-white text-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/thankyou/thankyou.webp')", 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[4px]" />

      {/* Content */}
      <div className="relative z-10 px-6">
       <div className="flex justify-center  mb-6">
          <Image
            src="/images/404/404.gif"
            alt="Success Icon"
            width={200}
            height={200}
            className="drop-shadow-2xl bg-white p-2 rounded-full "
            priority
          />
        </div>
        <h1 className="text-6xl font-extrabold tracking-tight mb-2">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="max-w-lg mx-auto mb-8 text-gray-200">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track.
        </p>

        <Link href="/" className="px-8 py-3 rounded-full font-medium text-white shadow-md transition-all duration-300 bg-[--secondary] hover:bg-black" >
         Back to Home
        </Link>
      </div>
    </section>
     
    </>
  );
}