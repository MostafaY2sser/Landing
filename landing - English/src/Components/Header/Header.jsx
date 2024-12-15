

import './header.css';
import logo from "/public/images/logo.png";
import top from "/public/images/top.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { useState } from 'react';




// eslint-disable-next-line react/prop-types
const Header = ({imgBottom}) => {




    // إدارة الحالة للحقول
    const [formData, setFormData] = useState({
        name: '', // يجب أن يتطابق مع name في الحقول
        phone: '',
        atend: '', // القيمة الافتراضية
    });

    // التعامل مع تغيير الحقول
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        // التأكد من وجود جميع الحقول
        if (!formData.name || !formData.phone || !formData.atend) {
            alert('يرجى ملء جميع الحقول المطلوبة.');
            return;
        }

        // إرسال البيانات باستخدام fetch
        const formParams = new URLSearchParams();
        formParams.append('name', formData.name);
        formParams.append('phone', formData.phone);
        formParams.append('atend', formData.atend);

        fetch('https://plus-boud.aalyasser.com/data_saver.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded', // النوع المطلوب
            },
            body: formParams.toString(), // تحويل البيانات إلى سلسلة URL-encoded
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            alert('تم إرسال البيانات بنجاح!');
            // تفريغ الحقول بعد الإرسال الناجح
            setFormData({
                name: '',
                phone: '',
                atend: '',
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
        });
    };

    return (
        <div className="firstSction">
            <div className="header bg-[--dark-color] py-2" id='form'>
                <button className="text-[white] text-[20px] bg-gradient-to-r from-[--text-color] to-[--light-color] mx-5 py-1 px-5 rounded-[10px] border-b-4 border-[white]">
                    احجز الان
                </button>
            </div>

            <div className="hero pb-20 pt-10 flex flex-row-reverse justify-around bg-[#F4F4F4]">
                <div className="text flex flex-col items-end gap-10 w-[45%]">
                    <div className="logo w-[80%] flex items-center justify-between flex-row-reverse">
                        <img src={logo} alt="" />
                        <h4 className="text-[45px] font-[700] text-[--text-color] pb-3">! مرحبا بك</h4>
                    </div>
                    <p className="text-start text-[30px]" dir='rtl'>
                        "معهد بعد للغات" هو مؤسسة تعليمية ناشئة <br /> 
                        (Boud Plus) متخصصة في تقديم خدمات تعليمية مبتكرة لتعليم اللغات الأجنبية، بما في ذلك 
                        "الإنجليزية، الصينية، الفرنسية"
                    </p>

                </div>

                <div className="box w-[30%] bg-[white] border-2 border-[black] rounded-[25px] flew flex-col p-10 mt-10 relative">
                    <h2 className="text-end text-[20px] font-[700] mb-10">لاستفسارك حول التسجيل ببرنامج اللغة الانجليزية أملئ البيانات</h2>
                    <div className="inputOne pl-[20px] border-[1px] border-[#333] rounded-[30px] flex items-center justify-between">
                        <input className='border-none outline-0 w-[70%] h-[40px]' type="text" name="name" placeholder="الاسم كامل"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="icon border-[1px] border-[#333] h-[40px] w-[40px] rounded-[30px] flex items-center justify-center">
                            <CiUser/>
                        </div>
                    </div>

                    <div className="inputTwo mt-5 pl-[10px] border-[1px]  border-[#333] rounded-[30px] flex items-center justify-between"> 
                        <div className="left ">
                            <span className="border-r-[1px] border-[#333] pr-1 mr-3">+966</span>
                            <input className="border-none outline-0 w-[70%] h-[40px]" type="text" name="phone"  placeholder="ادخل رقم الهاتف"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="icon border-[1px] border-[#333] h-[40px] w-[40px] rounded-[30px] flex items-center justify-center">
                            <IoIosPhonePortrait />
                        </div>
                    </div>

                    <h5 className="text-[24px] font-[700] my-5 text-end">إستفسارك حول الكورس</h5>

                    <div className="inputRadio cursor-pointer">
                        <div className="online">
                            <input className="mr-2" id="online" type="radio" name="atend" value="online"
                                checked={formData.atend === 'online'} 
                                onChange={handleChange}
                            />
                            <label className="text-[#757575]" htmlFor="online">Online</label>
                        </div>
                        <div className="offline">
                            <input className="mr-2" id="offline" type="radio" name="atend" value="offline"
                                checked={formData.atend === 'offline'} 
                                onChange={handleChange}
                            />
                            <label className="text-[#757575]" htmlFor="offline">Offline</label>
                        </div>
                    </div>

                    <div className="flex justify-center mt-10">
                        <button className="bg-gradient-to-b from-[--text-color] to-[--light-color] py-2 px-10 mb-3 text-[20px] font-[700] text-[white] rounded-lg"
                            onClick={handleSubmit}
                        >
                            ارسل الان
                        </button>
                    </div>

                    <img className="absolute top-[-45px] left-[-45px]" src={top} alt="" />
                    <img className="bottom absolute bottom-[-45px] right-[-45px]" src={imgBottom} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;
