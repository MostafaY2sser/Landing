import chang from '../../../public/images/chang.png'
import bottom from '../../../public/images/bottom.png'
const China = () => {
  return (
    <div
    dir='rtl'
    className="flex items-center justify-center gap-8 w-full py-2">
        <img className='w-[40px]' src={chang} alt="chang" />
        <img className='w-[40px]' src={chang} alt="chang" />
        <img className='w-[40px]' src={bottom} alt="chang" />
        <img className='w-[40px]' src={bottom} alt="chang" />
        <img className='w-[40px]' src={chang} alt="chang" />
    </div>
  )
}

export default China