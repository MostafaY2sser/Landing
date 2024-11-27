

import logo from "/public/images/logo.png"
import { IoIosPhonePortrait } from "react-icons/io";
import { CiUser } from "react-icons/ci";


const Header = () => {



    return (
        <div className="firstSction">

            <div className="header bg-[--dark-color] py-2">
                <button className="text-[white] text-[20px]  bg-gradient-to-r from-[--text-color] to-[--light-color] mx-5 py-1 px-5 rounded-[10px] border-b-4 border-[white] ">احجز الان</button>
            </div>


            <div className="hero py-10  flex items-center flex-row-reverse justify-around bg-[#F4F4F4]">

                <div className="text flex flex-col items-end  gap-10 w-[45%]">
                    <div className="logo w-[80%] flex items-center justify-between  flex-row-reverse">
                        <img src={logo} alt="" />
                        <h4 className=
"text-[45px] font-[700] text-[--text-color] befor:"
                        >! مرحبا بك</h4>
                    </div>
                    <p className="text-end text-[30px] ">”معهد بعد للغات“ هو مؤسسة تعليمية ناشئة (Plus Boud )متخصصة في تقديم خدمات تعليمية مبتكرة لتعليم اللغات األجنبية، بما في ذلك ”الصينية، الفرنسية، واإلنجليزية“</p>
                </div>

                <div className="box w-[30%] bg-[white] border-2 border-[black] rounded-[10px]">
                    <h2>لاستفسارك حول التسجيل ببرنامج اللغة الصينية أملئ البيانات</h2>
                    <div className="inputOne">
                        <input type="text" placeholder="Complete Name" />
                        <div className="icon">
                        <CiUser/>
                        </div>
                    </div>
                    <div className="inputTwo" >
                        <span>+966</span>
                        <input type="text"  placeholder="Enter Your Number"/>
                        <div className="icon">
                            <IoIosPhonePortrait />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Header
