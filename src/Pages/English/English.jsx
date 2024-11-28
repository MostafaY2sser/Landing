
import Header from './../../Components/Header/Header';
import Nabza from './../../Components/Nabza/Nabza';
import WhyChooseUs from './../../Components/WhyChooseUs/WhyChooseUs';
import Message from './../../Components/Message/Message';
import OurCourses from './../../Components/Header/OurCourses/OurCourses';
import LearningMethodology from './../../Components/LearningMethodology/LearningMethodology';
import Fl from '../../Components/Header/fl/Fl';
import NabzaEn from '../../Components/NabzaEn.jsx/NabzaEn';


const English = () => {
    return (
        <div>
            <Header/>
            <OurCourses/>
            <Fl />
            <NabzaEn/>
            <WhyChooseUs/>
            <LearningMethodology/>
            <Message/>
        </div>
    )
}

export default English
