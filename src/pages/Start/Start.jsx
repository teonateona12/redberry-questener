import { Logo } from "../../assets";

const Start = () => {
  return (
    <div className=" w-screen h-screen inline-flex flex-col items-center justify-center">
      <img src={Logo} alt="" className="mb-20" />
      <button className="realtive w-80 h-40 inline-flex items-top justify-center">
        <h4 className="w-40 absolute font-bold text-3xl text-white stroke-black translate-y-0.5 translate-x-0.5 opacity-0">კითხვარის დაწყება</h4>
        <h4 className="w-40 font-bold text-3xl absolute">კითხვარის დაწყება</h4>
      </button>
    </div>
  );
}

export default Start;
