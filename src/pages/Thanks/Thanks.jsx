import { bigStar, smallStar } from "../../assets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center f-size bg-[#232323]">
      <div className="wrapper flex flex-col">
        <img
          src={bigStar}
          className="max-w-[53px] ml-[25px] animate-moveBigStar delay-1 opacity-0"
        />
        <h1 className="text-white text-[64px]  font-semibold leading-19 tracking-widest">
          მადლობა
        </h1>
        <img
          src={smallStar}
          className="max-w-[33px] ml-[305px] animate-moveSmallStar opacity-0"
        />
      </div>
    </div>
  );
};

export default Thanks;
