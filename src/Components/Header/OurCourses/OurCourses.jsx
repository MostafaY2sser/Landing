const OurCourses = () => {
  return (
    <div className="w-full flex items-center justify-center">
        <div className="flex flex-col gap-3 md:gap-8 border border-[--dark-color] max-w-[750px] py-16 px-10">
            <h2 className="globalMain-header">دوراتنا</h2>
            <p className="font-bold text-center max-w-[480px] text-[20px] text-[#191E23]">مؤسسة تعليمية ناشئة )Plus Boud )متخصصة في تقديم خدمات تعليمية مبتكرة لتعليم اللغات األجنبية، بما في ذلك ”الصينية، الفرنسية، واإلنجليزية</p>
        
        
        
        <div className="flex items-center justify-center gap-2 flex-col sm:flex-row">
            <div className="border border-[--dark-color] rounded-sm hover:shadow-[0_10px_20px_rgba(0,0,0,0.25)] transition-shadow duration-300">
                
                {/* text */}
                <div className="flex items-center justify-center gap-2">
                    <h3>تعليم اللغات الفرنسية</h3>
                    
                    <div className="flex items-center justify-center gap-2">

                    <p>Admin</p>
                    30 Dec, 2024
                    </div>
                    
                </div>
            </div>
            <div className="h-[100px] w-[100px] bg-red-400"></div>
            <div className="h-[100px] w-[100px] bg-red-400"></div>
        </div>

        </div>
    </div>
  )
}

export default OurCourses