
import './header.css'
import { MenuList, PhoneNumbers } from './headerbase'
import { Lists, NumberLists } from './Lists';


export default function Header() {
    const publicImg = process.env.PUBLIC_URL;

    return (
        <header className='header'>
            <div className="config-panel">
                <div className="burger-menu">
                    <span className="burger-menu__element"></span>
                    <span className="burger-menu__elemtnt"></span>
                    <span className="burger__element"></span>
                </div>
            </div>

            <div className="header-logo">
                <a href="#" className="logo">
                    <img src={publicImg + '/images/logo.png'} alt="logo" />
                </a>
            </div>

            <ul className="menu-list">
                {MenuList.map((data) => (
                    <Lists key={data.text} {...data} />
                ))}
            </ul>
            <div className="links">
                <ul className="phone-numbers">
                    {PhoneNumbers.map((data) => (
                        <NumberLists key={data.text} {...data} />
                    ))}
                </ul>
                <ul className="user-actions">
                    <li className="user-actions-item">
                        <a href="#" className="user-actions-phone"><img src={publicImg + '/images/phone.png'} alt="phone" /></a>
                    </li>
                    <li className="user-actions-item">
                        <a href="#" className="user-actions-telegram"><img src={publicImg + '/images/tg.png'} alt="tg" /></a>
                    </li>
                </ul>
            </div>
        </header >
    )
}
