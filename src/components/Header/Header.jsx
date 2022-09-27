

export const Header = ({ currency }) => {

    return (
        <ul>
            {
                currency.map(({ ccy, base_ccy, buy, sale }) => (
                    <li key={ccy}>
                        <div>{ccy} : {base_ccy}</div>
                        <div>buy: {buy} sale: {sale}</div>
                    </li>

                ))
            }

        </ul>
    )
}
