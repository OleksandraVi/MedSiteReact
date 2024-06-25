export function IntroCardsComponent({ img, title, text }) {
    return (
        <article class="intro-card">
            {img && (
                <img src={process.env.PUBLIC_URL + img} alt={title} />
            )}
            {title && (
                <header>
                    <h2>{title}</h2>
                </header>
            )}
            {text && (
                <div class="content">
                    <p>{text}</p>
                </div>
            )}
        </article>
    )
}

