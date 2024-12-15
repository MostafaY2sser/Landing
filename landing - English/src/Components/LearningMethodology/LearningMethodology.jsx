
import React from "react";

const LearningMethadology = () => {
    return (
        <div
            className="bg-gradient-to-b from-[#855D00] py-20 mb-10 to-[#DABF86] gap-6 flex items-center justify-center flex-col p-8"
            dir="rtl"
        >
            <h2 className="text-3xl font-bold mb-8 text-[#5B4104]">
                منهجية التعليم
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
                {/* القسم الأول */}
                <div className="bg-transparent text-white text-center w-full sm:w-[48%] lg:w-[22%] flex flex-col items-center">
                    <div className="relative flex justify-center items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <img
                                src="/images/Vector (4).png"
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                    <h2 className="text-lg font-bold">التعلم التفاعلي</h2>
                    <h3 className="text-lg font-semibold mb-4">
                        INTERACTIVE LEARNING
                    </h3>
                    <div className="text-lg text-black">
                        <p className="mb-2">
                            مشاركة فعّالة: إشتراك الطالب في الأنشطة التفاعلية مثل المناقشات، ولعب
                            الأدوار، والعمل الجماعي.
                        </p>
                        <p>
                            محاكاة الواقع: استخدام أساليب تعليمية تعتمد على محاكاة مواقف حياتية
                            وعملية حقيقية لتطبيق ما يتعلمه الطالب.
                        </p>
                    </div>
                </div>

                {/* القسم الثاني */}
                <div className="bg-transparent text-white text-center w-full sm:w-[48%] lg:w-[22%] flex flex-col items-center">
                    <div className="relative flex justify-center items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <img
                                src="/images/Vector (5).png"
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                    <h2 className="text-lg font-bold">التخصيص والتكيف</h2>
                    <h3 className="text-lg font-semibold mb-4">
                        LEARNING PERSONALIZED
                    </h3>
                    <div className="text-lg text-black">
                        <p className="mb-2">
                            تقييم مستمر تحديد مستوى كل طالب واحتياجاته قبل وأثناء البرنامج التعليمي.
                        </p>
                        <p>
                            برامج مخصصة تصميم دورات تناسب أهداف الطالب سواء كانت أكاديمية، مهنية،
                            أو سياحية.
                        </p>
                    </div>
                </div>

                {/* القسم الثالث */}
                <div className="bg-transparent text-white text-center w-full sm:w-[48%] lg:w-[22%] flex flex-col items-center">
                    <div className="relative flex justify-center items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <img
                                src="/images/Vector (6).png"
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                    <h2 className="text-lg font-bold">استخدام التكنولوجيا الحديثة</h2>
                    <h3 className="text-lg font-semibold mb-4">
                        INTEGRATION TECHNOLOGY
                    </h3>
                    <div className="leading-6 flex flex-col gap-2 text-black">
                        <div className="box flex items-center gap-1">
                            <img src="/images/Vector.png" alt="" />
                            <span>التعليم الرقمي</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/images/Vector.png" alt="" />
                            <span>الفصول الافتراضية</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/images/Vector.png" alt="" />
                            <span>التدريب العملي</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/images/Vector.png" alt="" />
                            <span>ورش عمل مكثفة</span>
                        </div>
                        <div className="box flex items-center gap-1">
                            <img src="/images/Vector.png" alt="" />
                            <span>مشاريع تطبيقية</span>
                        </div>
                    </div>
                </div>

                {/* القسم الرابع */}
                <div className="bg-transparent text-white text-center w-full sm:w-[48%] lg:w-[22%] flex flex-col items-center">
                    <div className="relative flex justify-center items-center mb-6">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <img
                                src="/images/Vector (7).png"
                                alt="Interactive Learning"
                                className="w-16 h-16"
                            />
                        </div>
                    </div>
                    <h2 className="text-lg font-bold">التقييم والتحسين المستمر</h2>
                    <h3 className="text-lg font-semibold mb-4">
                        CONTINUOUS ASSESSMENT
                    </h3>
                    <div className="text-lg text-black leading-6">
                        <p className="mb-2">اختبارات منتظمة</p>
                        <p>تغذية راجعة</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearningMethadology;

