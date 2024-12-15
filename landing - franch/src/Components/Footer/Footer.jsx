
import './footer.css'
import logo from '/public/images/logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";






const Footer = () => {
    return (
        <div className="footer px-20 bg-gradient-to-r from-[#000000] to-[#E9C579] relative">

            <div className="top  flex items-center justify-between flex-wrap px-10 pb-20 gap-5 pt-[100px] ">
                <div className="box flex items-center gap-3 ">
                    <div className="icon w-[80px] h-[100px] bg-[--dark-color] text-[white] rounded-[20px] flex items-center justify-center text-[30px]"><FaPhoneAlt/></div>
                    <div className="text text-[#FFFFFF] flex flex-col">
                        <span className="text-[20px] font-[500]">phone:</span>
                        <span  className="text-[18px] font-[400]">+966537211776</span>
                    </div>
                </div>
                <div className="box flex items-center gap-3 ">
                    <div className="icon w-[80px] h-[100px] bg-[--dark-color] text-[white] rounded-[20px] flex items-center justify-center text-[30px]"><CiLocationOn/></div>
                    <div className="text text-[#FFFFFF] flex flex-col">
                        <span className="text-[20px] font-[500]">Address :</span>
                        <span  className="text-[18px] font-[400]">Damamm, Sudia Arabia</span>
                    </div>
                </div>
                <div className="box flex items-center gap-3 ">
                    <div className="icon w-[80px] h-[100px] bg-[--dark-color] text-[white] rounded-[20px] flex items-center justify-center text-[30px]"><FaRegMessage/></div>
                    <div className="text text-[#FFFFFF] flex flex-col">
                        <span className="text-[20px] font-[500]">Email:</span>
                        <span  className="text-[18px] font-[400]">info@boudplus.com</span>
                    </div>
                </div>
            </div>

            <img className="absolute top-3 right-3 w-[100px]" src={logo} alt="" />

            <hr />

            <div className="bottom flex justify-between items-center w-[70%] ml-auto py-10">
                <div className="copy text-[--dark-color] text-[18px] font-[700]">
                    &copy; 
                    <span className='text-[white]'> 2024 </span>
                    <span> Boud Plus Identity by  </span>
                    <a href="http://codecraft1.com">
                        <span className='text-[white]'>Code Craft.</span>
                    </a>
                    <span className=''> All Rights </span>
                    <span> Reserved </span>
                </div>
                <div className="icons flex text-[--text-color] gap-2">
                    <div className="icon w-[50px] h-[50px] rounded-[50%] border-2 border-[--text-color] flex items-center justify-center text-[22px] cursor-pointer">
                        <a href="https://snapchat.com/t/FSIoqd3I"><FaSnapchatGhost/></a>
                    </div>
                    <div className="icon w-[50px] h-[50px] rounded-[50%] border-2 border-[--text-color] flex items-center justify-center text-[22px] cursor-pointer">
                        <a href="https://x.com/boudplus?s=11"><FaXTwitter/></a>
                    </div>
                    <div className="icon w-[50px] h-[50px] rounded-[50%] border-2 border-[--text-color] flex items-center justify-center text-[22px] cursor-pointer">
                        <a href="https://www.tiktok.com/@boudplus?_t=8rhMuZYjb4n&_r=1"><AiFillTikTok/></a>
                    </div>
                    <div className="icon w-[50px] h-[50px] rounded-[50%] border-2 border-[--text-color] flex items-center justify-center text-[22px] cursor-pointer">
                        <a href="https://www.instagram.com/boudplus?igsh=M3V2NGIyMXFrczQ0"><FaInstagram/></a>    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
