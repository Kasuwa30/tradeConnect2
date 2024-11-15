import React from "react";
import Link from "next/link";
import Image from "next/image";

const SendEmail = () => {
  return (
    <div className="flex min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg overflow-hidden">
      {/* Left Side with Background Image */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/forget-password.svg"
          alt="Background"
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-l-lg"
        />
      </div>

      {/* Right Side with Form */}
      <div className="w-1/2 flex flex-col justify-center items-center px-6">
        {/* Logo */}
        <Image src="/images/trade_connect.svg" alt="Logo" width={80} height={80} className="w-20 lg:w-24 mb-8" />

        <div className="shadow-lg bg-white rounded-lg p-8 w-full max-w-md animate-fadeIn">
          <div className="flex flex-col items-center mb-6">
            <Image src="/images/email-icon.svg" alt="Email Icon" width={60} height={60} className="mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800 text-center">Check Your Email</h1>
          </div>
          <p className="text-gray-700 text-center mb-6">
            A link has been sent to your email. Follow the instructions to reset your password.
          </p>

          <Link href="/auth/resetpassword">
            <button type="button" className="w-full py-3 bg-red-800 text-white font-semibold rounded hover:bg-red-700 transition-all">
              Check Mail to Proceed
            </button>
          </Link>
          <p className="text-center text-gray-600 mt-6">
            Go back to{" "}
            <Link href="/auth/login" className="text-red-500 font-medium hover:underline">
              Log in Page
            </Link>
          </p>
        </div>
      </div>
    </div>

    // <div className="flex min-h-screen bg-red-200 gap-6 justify-center items-center mx-auto bg-opacity-50 rounded-lg overflow-hidden">
    //   {/* Left Side with Background Image */}
    //   <div className="w-1/2 relative animate-parallax">
    //     <Image
    //       src="/images/forget-password.svg"
    //       alt="Background"
    //       width={100}
    //       height={100}
    //       className="h-full w-full object-cover rounded-lg"
    //     />
    //   </div>

    //   {/* Right Side with Form */}
    //   <div className="w-1/2 flex flex-col">
    //     <Image src="/images/trade_connect.svg" alt="Logo" width={80} height={80} className="w-20 lg:w-24 mb-8" />
    //     <div className="my-10 shadow p-5 w-3/5 mx-10 animate-flipIn">
    //       <h1 className="text-3xl text-center mt-20 mx-10">
    //         <Image src="/images/email-icon.svg" alt="Logo" width={80} height={80} className="w-20 lg:w-24 mb-8" />w{" "}
    //       </h1>
    //       <p className="text-gray-700 text-center pt-7 mx-10">A link has been sent to your Email</p>
    //       <button type="submit" className="w-full py-3 bg-red-800 text-white rounded mt-4 transform hover:skew-y-3 transition-all">
    //         <Link href="/Reset-password" className="text-red-200">
    //           Check Mail to Proceed
    //         </Link>
    //       </button>

    //       <p className="text-center text-gray-600 mt-4">
    //         Go back to{" "}
    //         <Link href="/" className="text-red-500">
    //           Log in Page
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SendEmail;
