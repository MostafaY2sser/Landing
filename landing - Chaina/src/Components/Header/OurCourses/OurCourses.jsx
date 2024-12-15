import { FaClock } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";
// import img from "../../../../public/images/Container.png";
import english from '../../../assets/english.jpg'
import chaina from '../../../assets/chaina.jpg'
import franch from '../../../assets/franch.jpg'
import { useState } from "react";
import Cn from '../cn/Cn';
import Fr from '../fr/Fr';
import Fl from '../fl/Fl';


const OurCourses = () => {

    const [activeTab, setActiveTab] = useState("books");

    const renderContent = () => {
        switch (activeTab) {
          case "fr":
            return <Fr/>;
          case "cn":
            return <Cn />;
          case "fl":
            return <Fl/> ;
          default:
            return null;
        }
      };

  return (
    <div className="w-full flex flex-col items-center justify-center relative mt-10">
      <div className="flex flex-col gap-3 md:gap-8 border border-[--dark-color] max-w-[750px] py-5 px-10">
        <h2 className="globalMain-header">دوراتنا</h2>
        <p className="font-bold text-center text-[20px] text-[#191E23]" dir="rtl">
        <span> (Boud Plus)</span>
          مؤسسة تعليمية ناشئة متخصصة في تقديم خدمات تعليمية مبتكرة لتعليم اللغات الأجنبية
          بما في ذلك  الفرنسية، الصينية،  والإنجليزية
        </p>

        <div className="flex items-center justify-center gap-2 flex-col sm:flex-row">
          <div className="py-3 border border-[--dark-color] rounded-sm hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300 group">
            {/* الصورة */}
            <div className="overflow-hidden">
              <img
                className="w-[220px] transition-transform duration-300 group-hover:scale-110"
                src={franch}
                alt="img"
              />
            </div>

            {/* text */}
            <div className="flex flex-col items-center justify-center gap-2 py-2 ">
              <h3>تعليم اللغات الفرنسية</h3>

              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  <FaClock className="text-[--dark-color]" />
                  <p className="ml-2 text-[--dark-color]">30 Dec, 2024</p>
                </div>

                <div className="flex items-center justify-center">
                  <BsPersonFillCheck className="text-[--dark-color]" />
                  <p className="ml-2 text-[--dark-color]">Admin</p>
                </div>
              </div>

              <a href="https://french.plus-boud.aalyasser.com" className="flex items-center text-white justify-center rounded-md bg-gradient-to-b from-[--light-color] to-[--text-color] py-2 px-3">
                اعرف المزيد
                <BsPersonFillCheck className="ml-2 text-white" />
              </a>
              
            </div>
          </div>

{/* الصيني */}
          <div className="py-3 border border-[--dark-color] rounded-sm hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300 group">
            {/* الصورة */}
            <div className="overflow-hidden">
              <img
                className="w-[220px] transition-transform duration-300 group-hover:scale-110"
                src={chaina}
                alt="img"
              />
            </div>

            {/* text */}
            <div className="flex flex-col items-center justify-center gap-2 py-2 ">
              <h3>تعليم اللغات الصينية</h3>

              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  <FaClock className="text-[--dark-color]" />
                  <p className="ml-2 text-[--dark-color]">30 Dec, 2024</p>
                </div>

                <div className="flex items-center justify-center ">
                  <BsPersonFillCheck className="text-[--dark-color]" />
                  <p className="ml-2 text-[--dark-color]">Admin</p>
                </div>
              </div>
              <a href="https://plus-boud.aalyasser.com/" onClick={() => setActiveTab("cn")} className="flex items-center justify-center rounded-md text-white bg-gradient-to-b from-[--light-color] to-[--text-color] py-2 px-3">
                اعرف المزيد
                <BsPersonFillCheck className="ml-2 text-white" />
              </a>
            </div>
          </div>

          <div className="py-3 border border-[--dark-color] rounded-sm hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300 group">
            {/* الصورة */}
            <div className="overflow-hidden">
              <img
                className="w-[220px] transition-transform duration-300 group-hover:scale-110"
                src={english}
                alt="img"
              />
            </div>

            {/* text */}
            <div className="flex flex-col items-center justify-center gap-2 py-2 ">
              <h3>تعليم اللغه الانجليزيه</h3>

              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  <FaClock className="text-[--dark-color]" />
                  <p className="ml-2 text-[--dark-color]">30 Dec, 2024</p>
                </div>

                <div className="flex items-center justify-center">
                  <BsPersonFillCheck className="text-[--dark-color]" />
                  <p className="ml-2 text-[--dark-color]">Admin</p>
                </div>
              </div>
              <a  href="https://english.plus-boud.aalyasser.com" className="flex items-center justify-center rounded-md text-white bg-gradient-to-b from-[--light-color] to-[--text-color] py-2 px-3"> 
                اعرف المزيد
                <BsPersonFillCheck className="ml-2 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-3 px-5">
        {renderContent()}
      </div>
       
    </div>
  );
};

export default OurCourses;
