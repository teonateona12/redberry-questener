import { Logo } from "../../assets";
import { Link} from 'react-router-dom'

const Start = () => {
  return (
    <div className="w-screen h-screen inline-flex flex-col items-center justify-center">
      <img src={Logo} alt="" className="animate-shrink mb-20" />
      <Link to={'/personal'} >
          <button className="animate-appear group realtive w-80 h-40 inline-flex items-top justify-center">
            <h4 style={styledStroke} className="w-40 absolute font-bold text-3xl text-white stroke-black translate-y-0.5 translate-x-0.5 opacity-0 group-hover:opacity-100 transition-all">კითხვარის დაწყება</h4>
            <h4 className="w-40 font-bold text-3xl absolute text-primaryText">კითხვარის დაწყება</h4>
          </button>      
      </Link>
    </div>
  );
}

export default Start;

const styledStroke = {
  textShadow: '1px 1px 1px  #232323, -1px -1px 0px  #000, 1px -1px 0px  #000, -1px 1px 0px  #232323'
}
