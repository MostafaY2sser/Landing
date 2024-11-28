
import Header from './../../Components/Header/Header';
import Nabza from './../../Components/Nabza/Nabza';
import WhyChooseUs from './../../Components/WhyChooseUs/WhyChooseUs';
import Message from './../../Components/Message/Message';
import OurCourses from './../../Components/Header/OurCourses/OurCourses';
import LearningMethodology from './../../Components/LearningMethodology/LearningMethodology';
import bottom from "/public/images/bottom.png"
import Cn from '../../Components/Header/cn/Cn';




const Chaina = () => {
    return (
        <div>
            <Header  imgBottom={bottom}/>
            <OurCourses/>
            <Cn/>
            <Nabza/>
            <WhyChooseUs/>
            <LearningMethodology/>
            <Message/>
        </div>
    )
}

export default Chaina
