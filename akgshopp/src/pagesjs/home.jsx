import Crousal from "../component/crousal";
import Navber from "../component/navber";
import "../pagescss/home.css";
import supersakti from "../assets/supersakti.jpg";
import chupri from "../assets/chupri.jpg";
import tajbucket from "../assets/tajbucket.jpg"
import lowbucket from "../assets/lowbucket.jpg"
import balti from "../assets/balti.jpg";
import salt from "../assets/salt.jpg";
import chapa  from "../assets/chapa.jpg";
import telfish from "../assets/telfish.jpg";
import ecoflex from "../assets/eco flex.jpg";

export default function Home() {
  return (
    <div>
      <Navber />
      <Crousal />
      <div id="catagory">
        <div id="catagoryheading">
          <h2>TOP SELLING PRODUCT</h2>
        </div>
        <ul id="ul1">
          <li>
            <img
              onClick={() => switchonclick("man")}
              src={supersakti}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("man")} className="seedetails">
              <h3>Pankaj Super Sakti suction</h3>
              <ul>
                <li>2 inch 60 MM</li>
                <li>2.5 inch 65 MM</li>
                <li>3 inch 70 MM</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("woman")}
              src={chupri}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("woman")} className="seedetails">
              <h3>Plastic Chupri</h3>
              <ul>
                <li>8 inch local</li>
                <li>10 inch local</li>
                <li>12 inch local</li>
                
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={tajbucket}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>Plastic Taj Bucket</h3>
              <ul>
                <li>14 inch </li>
                <li>16 inch </li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={lowbucket}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>Plastic local Bucket</h3>
              <ul>
                
                <li>14 inch</li>
                <li>16 inch</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={salt}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>Salt </h3>
              <ul>
                <li>25 kg Bag</li>
                <li>1 kg packet</li>
                <li>500g packet</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={chapa}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>Chapa</h3>
              <ul>
                <li>single size</li>
                {/* <li>1kg packet</li>
                <li>500g packet</li> */}
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("woman")}
              src={telfish}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("woman")} className="seedetails">
              <h3>Footvalve & Telfish</h3>
              <ul>
                <li>2 inch Footvalve &  Telfish </li>
               
                <li>2.5 inch Footvalve & telfish</li>
               
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("man")}
              src={ecoflex}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("man")} className="seedetails">
              <h3>Pankaj Super flex suction</h3>
              <ul>
              <li>2 inch 60 MM</li>
                <li>2.5 inch 65 MM</li>
                <li>3 inch 70 MM</li>
              </ul>
            </div>
          </li>
          <li>
            <img
              onClick={() => switchonclick("style")}
              src={balti}
              alt="loading"
            ></img>
            <div onClick={() => switchonclick("style")} className="seedetails">
              <h3>plastic bin</h3>
              <ul>
                <li>height 25cm</li>
                <li>width 22cm</li>
                <li>5Ltr capacity</li>
              </ul>
            </div>
          </li>
          
          
        </ul>
      </div>
    </div>
  );
}
