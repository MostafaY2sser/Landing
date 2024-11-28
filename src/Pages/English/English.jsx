
import Header from './../../Components/Header/Header';
import Nabza from './../../Components/Nabza/Nabza';
import WhyChooseUs from './../../Components/WhyChooseUs/WhyChooseUs';
import Message from './../../Components/Message/Message';
import OurCourses from './../../Components/Header/OurCourses/OurCourses';
import LearningMethodology from './../../Components/LearningMethodology/LearningMethodology';
import Fl from '../../Components/Header/fl/Fl';


const English = () => {
    return (
        <div>
            <Header/>
            <OurCourses/>
            <Fl />
            <Nabza/>
            <WhyChooseUs/>
            <LearningMethodology/>
            <Message/>
        </div>
    )
}

export default English
