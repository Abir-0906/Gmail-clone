import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
      <div className='flex items-centre gap-10'>
        <div className='flex items-centre gap-10'>
          <div className='p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png'
            alt="logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
