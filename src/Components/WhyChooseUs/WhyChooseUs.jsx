import React from "react";
import { FaAnchor, FaTree, FaHome, FaBell, FaCogs } from "react-icons/fa";

const LanguageProficiency = () => {
  return (
    <div className="bg-[#DABF86] px-8 pt-8 pb-24" dir="rtl">
      <h2 className="text-3xl font-bold my-11 text-white pr-4">لماذا تختارنا:</h2>

      {/* شبكة الأقسام */}
      <div className="flex flex-wrap md:flex-nowrap justify-start pr-8 gap-11">
        {/* العنصر الأول */}
        <div className="relative bg-white border-2 rounded-xl rounded-tr-none pb-3 w-full md:w-[450px] h-auto">
          <div className="flex items-center justify-start">
            <div className="bg-[#855D00] ml-2 p-2 rounded-lg text-white rounded-tr-none rounded-br-none">
              <FaAnchor className="text-lg" />
            </div>
            <h3 className="text-[#5a4634] font-bold text-lg ml-2">إتقان اللغات:</h3>
          </div>
          <p className="text-[#5a4634] text-sm mt-2 pr-4">
            تمكين الطالب من إتقان اللغات المستهدفة بجميع جوانبها (التحدث، الكتابة، القراءة، والاستماع).
          </p>
        </div>

        {/* العنصر الثاني */}
        <div className="relative bg-white border-2 rounded-xl rounded-tr-none pb-3 w-full md:w-[450px] h-auto">
          <div className="flex items-center justify-start">
            <div className="bg-[#855D00] ml-2 p-2 rounded-lg text-white rounded-tr-none rounded-br-none">
              <FaTree className="text-lg" />
            </div>
            <h3 className="text-[#5a4634] font-bold text-lg ml-2">التأهيل المهني:</h3>
          </div>
          <p className="text-[#5a4634] text-sm mt-2 pr-4">
            إعداد الطالب للتواصل الفعال داخل بيئات العمل متعددة الثقافات.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-start pr-8 gap-11 pt-10">
        {/* العنصر الثالث */}
        <div className="relative bg-white border-2 rounded-xl rounded-tr-none pb-3 w-full md:w-[570px] h-auto">
          <div className="flex items-center justify-start">
            <div className="bg-[#855D00] ml-2 p-2 rounded-lg text-white rounded-tr-none rounded-br-none">
              <FaBell className="text-2xl text-white" />
            </div>
            <h3 className="text-[#5a4634] font-bold text-lg ml-2">التميز الأكاديمي:</h3>
          </div>
          <p className="text-[#5a4634] text-sm mt-2 pr-4">
            تطوير برامج تعليمية تتماشى مع المعايير الدولية وتلبي الاحتياجات الشخصية للمتعلمين.
          </p>
        </div>

        {/* العنصر الرابع */}
        <div className="relative bg-white border-2 rounded-xl rounded-tr-none pb-3 w-full md:w-[570px] h-auto">
          <div className="flex items-center justify-start">
            <div className="bg-[#855D00] ml-2 p-2 rounded-lg text-white rounded-tr-none rounded-br-none">
              <FaHome className="text-lg" />
            </div>
            <h3 className="text-[#5a4634] font-bold text-lg ml-2">تعزيز التفكير النقدي والإبداعي:</h3>
          </div>
          <p className="text-[#5a4634] text-sm mt-2 pr-4">
            ربط تعلم اللغات بتطوير مهارات التفكير وحل المشكلات.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center items-center pr-8 gap-11 pt-10">
        {/* العنصر الأخير */}
        <div className="relative bg-white border-2 rounded-xl rounded-tr-none pb-3 w-full md:w-[750px] h-auto">
          <div className="flex items-center justify-start">
            <div className="bg-[#855D00] ml-2 p-2 rounded-lg text-white rounded-tr-none rounded-br-none">
              <FaCogs className="text-lg" />
            </div>
            <h3 className="text-[#5a4634] font-bold text-lg ml-2">دعم الاقتصاد الرقمي:</h3>
          </div>
          <p className="text-[#5a4634] text-sm mt-2 pr-4">
            استخدام التكنولوجيا الحديثة في التعليم لتوسيع نطاق خدماتنا والوصول إلى جمهور عالمي.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageProficiency;




