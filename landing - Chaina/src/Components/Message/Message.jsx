

import './message.css'
import pepole from '/public/images/pepole.png'

const Message = () => {
    return (
        <div  className="message my-20 flex justify-around items-center gap-[100px] ">

            <img className="pepole w-[35%] h-[30%] ml-[100px] rounded-lg" src={pepole} alt="" />

            <div className="text  text-center  ">
                <h4 className="text-[60px] text-[--text-color] font-[900]">: رسالتنا</h4>
                <p  className="ml-auto  mr-[50px] text-[30px]">رسالتنا هي توفير بيئة تعليمية مبتكرة وملهمة، تُركز على إتقان اللغات وربطها باالحتياجات المهنية والحياتية</p>
                <div className="buttons flex items-center gap-20 justify-center mt-20">
                    <button className='bg-gradient-to-b from-[--text-color] to-[--light-color] text-[white] text-[18px] font-[700] rounded-md py-3 px-10' >عرض المزيد من الدورات</button>
                    <button className='bg-gradient-to-b from-[--text-color] to-[--light-color] text-[white] text-[18px] font-[700] rounded-md py-3 px-10'>إطلع على خدماتنا</button>
                </div>
            </div>

        </div>
    )
}

export default Message
