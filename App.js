import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Hero';
import SectionTwo from './Components/SectionTwo';
import Sectionthree from './Components/Section-three';
import Sectionfour from './Components/Sectionfour';
import Sectionfive from './Components/Sectionfive';
import Footer from './Components/Footer';
import Videocomponents from './Videocomponent/videocomponet';
import SimpleAccordion from './Components/Faq';


function App() {
  return (
    <div  >
     <Hero/>
     <SectionTwo/>
     <Sectionthree/>
     <Sectionfour/>
     <Sectionfive/>
    <SimpleAccordion/>
     <Footer/>
     <Videocomponents/>
    </div>
  );
}

export default App;
