import './services.css'
import { ServicesCards, LittleCards } from './servicesbase'
import { ServiceCardComponent, LittleCardComponent } from './servicecards'

export default function IntroSection() {
    const publicImg = process.env.PUBLIC_URL;
    return (
        <section class="services">
            <div class="services-inner ">
                <div class="services-card services-inner-img">
                    <img src={publicImg + "images/dna.png"} alt="dna" />
                </div>
                <div class="services-card element-title" >
                    <h2>Our passion, is your care</h2>
                </div>
                {ServicesCards.map((data) => (
                    <ServiceCardComponent key={data.text} {...data} />
                ))}
                {LittleCards.map((data) => (
                    <LittleCardComponent key={data.text} {...data} />
                ))}
            </div>
        </section >
    )
}