import React from "react";
import { FaTree, FaAnchor, FaHome, FaBell, FaCogs } from "react-icons/fa";

const WhyChooseUs = () => {
  const sections = [
    {
      icon: <FaAnchor className="text-2xl text-white" />,
      heading: "إتقان اللغات:",
      text: "تمكين الطالب من إتقان اللغات المستهدفة بجميع جوانبها (التحدث، الكتابة، القراءة، والاستماع).",
    },
    {
      icon: <FaTree className="text-2xl text-white" />,
      heading: "التأهيل المهني:",
      text: "إعداد الطالب للتواصل الفعال داخل بيئات العمل متعددة الثقافات.",
    },
    {
      icon: <FaHome className="text-2xl text-white" />,
      heading: "تعزيز التفكير النقدي والإبداعي:",
      text: "ربط تعلم اللغات بتطوير مهارات التفكير وحل المشكلات.",
    },
    {
      icon: <FaBell className="text-2xl text-white" />,
      heading: "التميز الأكاديمي:",
      text: "تطوير برامج تعليمية تتماشى مع المعايير الدولية وتلبي الاحتياجات الشخصية للمتعلمين.",
    },
    {
      icon: <FaCogs className="text-2xl text-white" />,
      heading: "دعم الاقتصاد الرقمي:",
      text: "استخدام التكنولوجيا الحديثة في التعليم لتوسيع نطاق خدماتنا والوصول إلى جمهور عالمي.",
    },
  ];

  return (
    <div className="bg-[#dec399] p-8">
      {/* العنوان الرئيسي */}
      <h2 className="text-right text-2xl font-bold mb-8 text-[#5a4634]">لماذا تختارنا:</h2>
      
      {/* الأقسام */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-lg flex items-start gap-4"
          >
            {/* الأيقونة */}
            <div className="bg-[#82623d] p-4 rounded-lg">
              {section.icon}
            </div>
            {/* النصوص */}
            <div>
              <h3 className="text-lg font-bold text-[#5a4634]">{section.heading}</h3>
              <p className="text-sm text-[#5a4634] mt-2">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
