import './css/reset.css';
import './css/home.css';
import Header from './components/header/Header';
import IntroSection from './components/introSection/IntroSection';
import ServicesSection from './components/servicesSection/ServicesSection'
import InfoSection from './components/infoSection/InfoSection'

function App() {
    return (
        <div className="page-container">
            <Header />
            <IntroSection />
            <ServicesSection />
            <InfoSection />
        </div>
    );
}

export default App;
