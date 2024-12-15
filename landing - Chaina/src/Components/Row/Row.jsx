

// import React from 'react'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'

const Row = () => {
    return (
        <div  className="bg-gradient-to-r from-[--text-color] to-[--light-color]  flex items-center justify-center gap-5 mt-5 w-full h-[100px]">
            <img className="w-[50px]" src={one} alt="" />
            <img  className="w-[50px]" src={two} alt="" />
            <img  className="w-[50px]" src={three} alt="" />
            <img  className="w-[50px]" src={four} alt="" />
            <img  className="w-[50px]" src={five} alt="" />
        </div>
    )
}

export default Row
