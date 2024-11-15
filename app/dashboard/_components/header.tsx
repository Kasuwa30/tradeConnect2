import Image from "next/image";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white ">
      <h1 className="text-xl text-black">Welcome Jane 👋🏽</h1>
      <div className="flex gap-4">
        <Image src="/images/header-icons.svg" alt="header-icons" width={400} height={400} />
      </div>
    </header>
  );
};

export default Header;
