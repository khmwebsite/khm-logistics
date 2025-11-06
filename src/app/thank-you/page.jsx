
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
    const siteUrl = 'https://khm-logistics.vercel.app/';
    const title = 'Thank You - KHM Logistics';
    const description = 'Thank you for reaching out to KHM Logistics. Your inquiry has been successfully submitted. Our team will connect with you soon.';
}

export default function ThankYou() {  
  return (
    <section
      className="relative flex flex-col items-center px-5 lg:px-0 justify-center h-[100vh] mt-[50px] text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('/images/thankyou/thankyou.webp')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
     
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-xl bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
        <div className="flex justify-center  mb-6">
          <Image
            src="/images/thankyou/namaste.gif"
            alt="Success Icon"
            width={130}
            height={130}
            className="drop-shadow-2xl bg-white rounded-full "
            priority
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
          Thank You for Reaching Out!
        </h1>

        <p className="text-white/90 leading-relaxed mb-8">
          Your inquiry has been successfully submitted.  
          Our team at <span className="font-semibold text-secondary">KHM Logistics</span> will connect with you soon.  
          We truly appreciate your trust in our services.
        </p>
        <Link href="/" className="px-8 py-3 rounded-full font-medium text-white shadow-md transition-all duration-300 bg-[--secondary] hover:bg-black" >
         Back to Home
        </Link>
      </div>

      <p className="relative z-10 mt-10 text-sm text-white/70">
        © {new Date().getFullYear()} KHM Logistics. All rights reserved.
      </p>
    </section>
  );
}
