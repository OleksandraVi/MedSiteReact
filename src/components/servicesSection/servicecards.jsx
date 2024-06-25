const publicImg = process.env.PUBLIC_URL;
export function ServiceCardComponent({ title, items }) {
    return (
        <div class="services-card">
            <img src={publicImg + "/images/services-logo.png"} alt="services" />
            <h2>{title}</h2>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export function LittleCardComponent({ title }) {
    return (
        <div class="services-card">
            <img src={publicImg + "/images/services-logo.png"} alt="services" />
            <h2>{title}</h2>
        </div>
    )
}

