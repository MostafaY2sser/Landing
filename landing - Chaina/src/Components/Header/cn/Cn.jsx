import img from "../../../../public/images/img_1.jpg";
import fff from '../../../../public/images/img-3.jpg'
import ggg from '../../../../public/images/img_2.jpg'
import img3 from '../../../../public/images/img_4.jpg'
import img4 from '../../../../public/images/img_5.jpg'
import img5 from '../../../../public/images/img_6.jpg'



const Cn = () => {
  return (
    <div>
    <div className="mb-10">
      <h2 className="globalMain-header py-3 ">تعليم اللغات الصينية</h2>
    </div>
    <div
      style={{
        backgroundImage: `url('/images/bg1.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex flex-wrap gap-5 justify-center relative  py-5 w-full"
    >
        
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex flex-wrap justify-center relative gap-2 flex-col sm:flex-row">
      
      <div className="flex items-center justify-center relative mt-0 md:mt-0">
        <div className="relative shadow-md rounded-lg p-4 w-[170px] flex flex-col items-center gap-4">
          {/* صورة الدورة */}
          <img src={img} alt="Course" className="w-[110px] object-contain" />

          {/* الشريط */}
          <div className="flex items-center justify-between w-full mt-2">
            {/* النص الأيسر */}
            <p className="text-[12px] font-bold text-white">up to</p>

            {/* الشريط */}
            <div className="flex items-center gap-1 flex-1 mx-2">
              <span className="h-3 w-3 bg-white border border-gray-400 rounded-full"></span>
              <div className="h-1 flex-1 bg-gray-300 relative">
                <div className="h-1 bg-[--text-color] w-1/2 absolute left-0 top-0"></div>
              </div>
              <span className="h-3 w-3 bg-[--text-color] rounded-full"></span>
            </div>

            {/* النص الأيمن */}
            <p className="text-[12px] font-bold text-white">3month</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center relative mt-0 md:mt-5">
        <div className="relativeshadow-md rounded-lg p-4 w-[170px] flex flex-col items-center gap-4">
          {/* صورة الدورة */}
          <img src={fff} alt="Course" className="w-[110px] object-contain" />

          {/* الشريط */}
          <div className="flex items-center justify-between w-full mt-2">
            {/* النص الأيسر */}
            <p className="text-[12px] font-bold text-white">up to</p>

            {/* الشريط */}
            <div className="flex items-center gap-1 flex-1 mx-2">
              <span className="h-3 w-3 bg-white border border-gray-400 rounded-full"></span>
              <div className="h-1 flex-1 bg-gray-300 relative">
                <div className="h-1 bg-[--text-color] w-1/2 absolute left-0 top-0"></div>
              </div>
              <span className="h-3 w-3 bg-[--text-color] rounded-full"></span>
            </div>

            {/* النص الأيمن */}
            <p className="text-[12px] font-bold text-white">3month</p>
          </div>
        </div>
      </div>
      {/*  */}
     
      <div className="flex items-center justify-center relative mt-0 md:mt-36">
        <div className="relative shadow-md rounded-lg p-4 w-[170px] flex flex-col items-center gap-4">
          {/* صورة الدورة */}
          <img src={ggg} alt="Course" className="w-[110px] object-contain" />

          {/* الشريط */}
          <div className="flex items-center justify-between w-full mt-2">
            {/* النص الأيسر */}
            <p className="text-[12px] font-bold text-white">up to</p>

            {/* الشريط */}
            <div className="flex items-center gap-1 flex-1 mx-2">
              <span className="h-3 w-3 bg-white border border-gray-400 rounded-full"></span>
              <div className="h-1 flex-1 bg-gray-300 relative">
                <div className="h-1 bg-[--text-color] w-1/2 absolute left-0 top-0"></div>
              </div>
              <span className="h-3 w-3 bg-[--text-color] rounded-full"></span>
            </div>

            {/* النص الأيمن */}
            <p className="text-[12px] font-bold text-white">2month</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex items-center justify-center relative mt-0 md:mt-10">
        <div className="relative shadow-md rounded-lg p-4 w-[170px] flex flex-col items-center gap-4">
          {/* صورة الدورة */}
          <img src={img3} alt="Course" className="w-[110px] object-contain" />

          {/* الشريط */}
          <div className="flex items-center justify-between w-full mt-2">
            {/* النص الأيسر */}
            <p className="text-[12px] font-bold text-white">up to</p>

            {/* الشريط */}
            <div className="flex items-center gap-1 flex-1 mx-2">
              <span className="h-3 w-3 bg-white border border-gray-400 rounded-full"></span>
              <div className="h-1 flex-1 bg-gray-300 relative">
                <div className="h-1 bg-[--text-color] w-1/2 absolute left-0 top-0"></div>
              </div>
              <span className="h-3 w-3 bg-[--text-color] rounded-full"></span>
            </div>

            {/* النص الأيمن */}
            <p className="text-[12px] font-bold text-white">2month</p>
          </div>
        </div>
      </div>
      {/*  */}

     
      {/*  */}
      <div className="flex items-center justify-center relative mt-0 md:mt-5">
        <div className="relative shadow-md rounded-lg p-4 w-[170px] flex flex-col items-center gap-4">
          {/* صورة الدورة */}
          <img src={img4} alt="Course" className="w-[110px] object-contain" />

          {/* الشريط */}
          <div className="flex items-center justify-between w-full mt-2">
            {/* النص الأيسر */}
            <p className="text-[12px] font-bold text-white">up to</p>

            {/* الشريط */}
            <div className="flex items-center gap-1 flex-1 mx-2">
              <span className="h-3 w-3 bg-white border border-gray-400 rounded-full"></span>
              <div className="h-1 flex-1 bg-gray-300 relative">
                <div className="h-1 bg-[--text-color] w-1/2 absolute left-0 top-0"></div>
              </div>
              <span className="h-3 w-3 bg-[--text-color] rounded-full"></span>
            </div>

            {/* النص الأيمن */}
            <p className="text-[12px] font-bold text-white">4month</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-center relative mt-0 md:mt-0">
        <div className="relative shadow-md rounded-lg p-4 w-[170px] flex flex-col items-center gap-4">
          {/* صورة الدورة */}
          <img src={img5} alt="Course" className="w-[110px] object-contain" />

          {/* الشريط */}
          <div className="flex items-center justify-between w-full mt-2">
            {/* النص الأيسر */}
            <p className="text-[12px] font-bold text-white">up to</p>

            {/* الشريط */}
            <div className="flex items-center gap-1 flex-1 mx-2">
              <span className="h-3 w-3 bg-white border border-gray-400 rounded-full"></span>
              <div className="h-1 flex-1 bg-gray-300 relative">
                <div className="h-1 bg-[--text-color] w-1/2 absolute left-0 top-0"></div>
              </div>
              <span className="h-3 w-3 bg-[--text-color] rounded-full"></span>
            </div>

            {/* النص الأيمن */}
            <p className="text-[12px] font-bold text-white">4month</p>
          </div>
        </div>
      </div>
      
      </div>
      
    </div>
    </div>
  );
};

export default Cn;
