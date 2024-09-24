import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4f border-b-8">
      <h1 className="text-4xl font-bold ">knowledge cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
