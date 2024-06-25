import './intro.css'
import { IntroCards } from './introbase'
import { IntroCardsComponent } from './introCard';


export default function IntroSection() {
    const publicImg = process.env.PUBLIC_URL;
    return (
        <section className='intro' >
            <div className='intro-inner '>

                <p>ЧЕРНІГІВСЬКИЙ МЕДИЧНИЙ ЦЕНТР СУЧАСНОЇ ОНКОЛОГІЇ СПІВЗАСНОВНИК, СЕО В МІЖНАРОДНИЙ ЦЕНТР КЛІНІЧНИХ
                    ДОСЛІДЖЕНЬ ДИРЕКТОР В ЧЕРНІГІВСЬКА ФЕДЕРАЦІЯ МОЛОДИХ МЕДИКІВ</p>
                <div className="intro-cards">
                    {IntroCards.map((data) => (
                        <IntroCardsComponent key={data.text} {...data} />
                    ))}
                </div>

            </div>
            <div className="person">
                <img src={publicImg + 'images/person.png'} alt="person" />
            </div>
        </section >
    )
}