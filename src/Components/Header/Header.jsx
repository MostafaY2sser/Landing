
import './header.css'
import logo from "/public/images/logo.png"
import top from "/public/images/top.png"
import bottom from "/public/images/bottom.png"
import { IoIosPhonePortrait } from "react-icons/io";
import { CiUser } from "react-icons/ci";


const Header = () => {



    return (
        <div className="firstSction">

            <div className="header bg-[--dark-color] py-2">
                <button className="text-[white] text-[20px]  bg-gradient-to-r from-[--text-color] to-[--light-color] mx-5 py-1 px-5 rounded-[10px] border-b-4 border-[white] ">احجز الان</button>
            </div>


            <div className="hero pb-20 pt-10  flex  flex-row-reverse justify-around bg-[#F4F4F4]">

                <div className="text flex flex-col items-end  gap-10 w-[45%]">
                    <div className="logo w-[80%] flex items-center justify-between  flex-row-reverse">
                        <img src={logo} alt="" />
                        <h4 className="text-[45px] font-[700] text-[--text-color] pb-3">! مرحبا بك</h4>
                    </div>
                    <p className="text-end text-[30px] ">”معهد بعد للغات“ هو مؤسسة تعليمية ناشئة (Plus Boud )متخصصة في تقديم خدمات تعليمية مبتكرة لتعليم اللغات األجنبية، بما في ذلك ”الصينية، الفرنسية، واإلنجليزية“</p>
                </div>



                <div className="box w-[30%] bg-[white] border-2 border-[black] rounded-[25px] flew flex-col p-10 mt-10 relative">

                    <h2 className="text-end text-[20px] font-[700] mb-10">لاستفسارك حول التسجيل ببرنامج اللغة الصينية أملئ البيانات</h2>
                    <div className="inputOne pl-[20px] border-[1px]  border-[#333] rounded-[30px] flex items-center justify-between">
                        <input className='border-none outline-0 w-[70%] h-[40px]' type="text" name="username" placeholder="Complete Name" />
                        <div className="icon border-[1px] border-[#333] h-[40px] w-[40px] rounded-[30px] flex items-center justify-center">
                            <CiUser/>
                        </div>
                    </div>

                    <div className="inputTwo mt-5 pl-[10px] border-[1px]  border-[#333] rounded-[30px] flex items-center justify-between" > 
                        <div className="left ">
                            <span className="border-r-[1px] border-[#333] pr-1 mr-3">+966</span>
                            <input className="border-none outline-0 w-[70%] h-[40px]" type="text" name="number"  placeholder="Enter Your Number"/>
                        </div>
                        <div className="icon border-[1px] border-[#333] h-[40px] w-[40px] rounded-[30px] flex items-center justify-center">
                            <IoIosPhonePortrait />
                        </div>
                    </div>

                    <h5 className="text-[24xp] font-[700] my-5 text-end">إستفسارك حول الكورس</h5>

                    <div className="inputRadio cursor-pointer">
                        <div className="online ">
                            <input className="mr-2" id="online" type="radio" name="courseType" />
                            <label className="text-[#757575] " htmlFor="online">Online</label>
                        </div>
                        <div className="ofline ">
                            <input  className="mr-2" id="ofline" type="radio" name="courseType" />
                            <label className="text-[#757575]" htmlFor="ofline">Offline</label>
                        </div>
                    </div>

                    <div className="flex justify-center mt-10">
                        <button className="bg-gradient-to-b from-[--text-color] to-[--light-color] py-2 px-10 mb-3 text-[20px] font-[700] text-[white] rounded-lg">
                            ارسل الان
                        </button>
                    </div>  


                    <img className="absolute top-[-45px] left-[-45px]" src={top} alt="" />
                    <img className="bottom absolute bottom-[-45px] right-[-45px]" src={bottom} alt="" />


                </div>

            </div>


        </div>
    )
}

export default Header
