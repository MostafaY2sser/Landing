
import { FaAnchor, FaTree, FaHome, FaBell, FaCogs } from "react-icons/fa";
import pepole from '../../assets/pepole.png'



const WhyChooseUs = () => {



  return (
    <div className="bg-[#DABF86] px-4 sm:px-8 pt-8 pb-24 relative" dir="rtl">
      <h2 className="text-3xl font-bold my-11 text-white pr-4">لماذا تختارنا:</h2>

      {/* شبكة الأقسام */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-11 sm:pr-0 md:flex-nowrap md:pr-8">
        {/* العنصر الأول */}
        <div className="relative bg-white border-2 rounded-xl rounded-tr-none pb-3 w-full md:w-[450px] h-auto">
          <div className="flex items-center justify-start">
            <div className="bg-[#855D00] ml-2 p-2 rounded-lg text-white rounded-tr-none rounded-br-none">
              <FaAnchor className="text-lg" />
            </div>
            <h3 className="text-[#5a4634] font-bold text-lg ml-2">إتقان اللغات:</h3>
          </div>
          <p className="text-[#5a4634] text-sm mt-2 pr-4 sm:pr-0">
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

      <div className="flex flex-wrap justify-center sm:justify-start gap-11 pt-10 sm:pr-0 md:flex-nowrap md:pr-8">
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
            <h3 className="text-[#5a4634] font-bold text-lg ml-2">
              تعزيز التفكير النقدي والإبداعي:
            </h3>
          </div>
          <p className="text-[#5a4634] text-sm mt-2 pr-4">
            ربط تعلم اللغات بتطوير مهارات التفكير وحل المشكلات.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-11 pt-10 sm:pr-0 md:pr-8">
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

    <img className="absolute top-[-50px] md:top-[-70px] left-[20px] w-[140px] sm:w-[160px] md:w-[250px]" src={pepole} alt="" />
    
    </div>
  );
};

export default WhyChooseUs;
