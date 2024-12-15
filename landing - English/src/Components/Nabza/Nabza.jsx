import React from "react";
import { FaArrowUp } from "react-icons/fa";

const NabzaEn= () => {
    return (
     <div className=" flex flex-col items-center py-8 sm:py-12 lg:py-16 px-4" dir="rtl">
     {/* العنوان */}
     <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-[#855D00]">
       نبذة عن تعليم اللغة الأنجليزية
     </h1>

     {/* الخط الأفقي */}
     <hr className="w-40 sm:w-60 lg:w-80 border-[#855D00] border-t-2 mb-6" />

     {/* النص */}
     <div className="flex flex-col sm:flex-row flex-wrap justify-center leading-relaxed max-w-[900px] text-sm sm:text-base lg:text-lg space-y-4 sm:space-y-0 text-justify">
         <p className=" py-1 px-2 sm:px-4 text-center ">
            دورات اللغة الإنجليزية باستخدام منهج Progressive Communication in English تقدم تعلماً متدرجاً يناسب جميع المستويات، بدءاً من المبتدئين (A1) إلى المتقدمين (C1).
            يركز المنهج على تطوير مهارات التواصل الشفهي والكتابي من خلال أنشطة تفاعلية تشمل التحدث، الاستماع، القراءة، والكتابة. يتميز المنهج بتقديم محتوى عملي يغطي المواقف اليومية والاجتماعية والمهنية، مع تعزيز فهم الطلاب للثقافة الإنجليزية.
            توفر الدورات عبر الإنترنت مرونة في التعلم ودعماً مباشراً من مدربين متخصصين، إضافةً إلى موارد رقمية مثل الفيديوهات والاختبارات الإلكترونية.
            هذه الدورات مثالية للراغبين في تعلم الإنجليزية لأغراض شخصية، مهنية، أو دراسية بطريقة منظمة وفعالة

         </p>
         <p className="py-1 sm:px-4 flex">
             لمزيد من التفاصيل يمكنك التسجيل في أعلى الصفحة.
         <a href="#form">
         <FaArrowUp className="mt-1" />
         </a>
         </p>
     </div>


     <div className="textRow w-full text-[white] text-[40px] text-center py-3 mt-5 bg-gradient-to-r from-[--text-color] to-[--light-color]">welcome!</div>


     {/* من نحن */}
     <h1 className="text-2xl sm:text-3xl font-bold my-4 text-center text-[#855D00]">
         من نحن
     </h1>

     {/* الخط الأفقي */}
     <hr className="w-20 sm:w-24 lg:w-28 border-[#855D00] border-t-2 mb-6" />

     <div className="flex flex-col sm:flex-row flex-wrap justify-center leading-relaxed max-w-5xl text-sm sm:text-base lg:text-lg space-y-4 sm:space-y-0 text-center">
         <p className="mb-2 px-2 sm:px-4">
             "معهد بعد للغات" هو مؤسسة تعليمية ناشئة (Boud plus) متخصصة في تقديم خدمات تعليمية مبتكرة لتعليم اللغات الأجنبية، بما في ذلك الصينية، الفرنسية، والإنجليزية. يتميز المعهد برؤية مستقبلية تهدف إلى تمكين الطلاب والمتدربين من إتقان اللغات وربطها بتطوير المهارات المهنية والحياتية التي تتماشى مع احتياجات سوق العمل الحديث.
         </p>
     </div>
 </div>
    );
};

export default NabzaEn;