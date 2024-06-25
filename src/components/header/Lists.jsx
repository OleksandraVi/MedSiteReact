export function Lists({ text }) {
    return (
        <li><p>{text}</p></li>
    )
}

export function NumberLists({ number, strongNumber }) {
    return (
        <li><p>{number} <span className="toUpper">
            {strongNumber}
        </span></p></li>
    )
}
