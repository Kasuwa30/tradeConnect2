const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl">Welcome</h1>
      <div className="flex gap-4">
        <button className="py-2 px-4 bg-blue-500 text-white rounded">Button 1</button>
        <button className="py-2 px-4 bg-blue-500 text-white rounded">Button 2</button>
        <button className="py-2 px-4 bg-blue-500 text-white rounded">Button 3</button>
      </div>
    </header>
  );
};

export default Header;
