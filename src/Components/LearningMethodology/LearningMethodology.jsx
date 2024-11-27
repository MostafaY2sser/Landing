import React from "react";


const LearningMethadology = () => {
    return (
        <div className="bg-gradient-to-b from-[#855D00] to-[#DABF86] gap-6 flex items-center flex-col justify-start p-10  relative" dir="rtl">
            <h2 className="text-3xl font-bold mb-8 text-[#5B4104] ">
                منهجية التعليم
            </h2>
            <div className="flex items-center justify-center">
                <div className="bg-transparent text-white text-center w-[24%]">
                    {/* القسم الأوسط - الدائرة */}
                    <div className="relative flex justify-center items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            {/* الصورة داخل الدائرة */}
                            <img
                                src="/public/images/Vector (4).png" // ضع رابط الصورة هنا
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                    {/* العنوان الرئيسي */}
                    <h2 className="text-lg font-bold">التعلم التفاعلي</h2>
                    <h3 className="text-lg font-semibold mb-4">INTERACTIVE LEARNING</h3>

                    {/* النصوص السفلية */}
                    <div className="text-lg leading-6">
                        <p className="mb-2 text-black text-start">
                            مشاركة فعّالة: إشراك الطالب في الأنشطة التفاعلية مثل المناقشات، ولعب
                            الأدوار، والعمل الجماعي.
                        </p>
                        <p className="text-black text-start">
                            محاكاة الواقع: استخدام أساليب تعليمية تعتمد على محاكاة مواقف حياتية
                            وعملية حقيقية لتطبيق ما يتعلمه الطالب.
                        </p>
                    </div>
                </div>

                {/* ///////////////////////////////////// */}
                <div className="bg-transparent text-white text-center w-[24%]">
                    {/* القسم الأوسط - الدائرة */}
                    <div className="relative flex justify-center items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            {/* الصورة داخل الدائرة */}
                            <img
                                src="/public/images/Vector (5).png"
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>


                    {/* العنوان الرئيسي */}
                    <h2 className="text-lg font-bold">التخصيص والتكيف</h2>
                    <h3 className="text-lg font-semibold mb-4">LEARNING PERSONALIZED</h3>

                    {/* النصوص السفلية */}
                    <div className="text-lg leading-6">
                        <p className="mb-2 text-black text-start">
                            تقييم مستمر تحديد مستوى كل طالب واحتياجاته قبل وأثناء البرنامج التعليمي.
                        </p>
                        <p className="text-black text-start">
                            برامج مخصصة تصميم دورات تناسب أهداف الطالب سواء كانت أكاديمية، مهنية، أو سياحية
                        </p>
                    </div>
                </div>
                {/* ////////////////////////////// */}
                <div className="bg-transparent text-white text-center w-[24%] flex flex-col items-center">
                    {/* القسم الأوسط - الدائرة */}
                    <div className="relative flex justify-center  items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            {/* الصورة داخل الدائرة */}
                            <img
                                src="/public/images/Vector (6).png"
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                    {/* العنوان الرئيسي */}
                    <h2 className="text-lg font-bold">استخدام التكنولوجيا الحديثة"</h2>
                    <h3 className="text-lg font-semibold mb-4">INTEGRATION TECHNOLOGY</h3>

                    {/* النصوص السفلية */}
                    <div className="leading-6 flex flex-col ">
                        <div className="box flex items-center gap-1">
                            <img src="/public/images/Vector.png" alt="" />
                            <span>التعليم الرقمي</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/public/images/Vector.png" alt="" />
                            <span>الفصول الأفتراضية</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/public/images/Vector.png" alt="" />
                            <span>التدريب العملي</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/public/images/Vector.png" alt="" />
                            <span>ورش عمل مكثفة</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/public/images/Vector.png" alt="" />
                            <span>مشاريع تطبيقية</span>
                        </div>

                    </div>
                </div>
                {/* ////////////////////////////////////// */}
                <div className="bg-transparent text-white text-center w-[24%]">
                    {/* القسم الأوسط - الدائرة */}
                    <div className="relative flex justify-center items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            {/* الصورة داخل الدائرة */}
                            <img
                                src="/public/images/Vector (7).png"
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                    {/* العنوان الرئيسي */}
                    <h2 className="text-lg font-bold">التقييم والتحسين المستمر</h2>
                    <h3 className="text-lg font-semibold mb-4">CONTINUOUS ASSESSMENT</h3>

                    {/* النصوص السفلية */}
                    <div className="text-sm leading-6">
                        <p className="mb-2 text-black">
                            اختبارات منتظمة
                        </p>
                        <p className="text-black">
                            تغذية راجعة
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningMethadology;

