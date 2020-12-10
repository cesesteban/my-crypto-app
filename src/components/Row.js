import React from 'react';
import { Link } from 'react-router-dom'
import { Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function Row({ cripto, name, nameCripto}) {//recibe por parametro dos variables
    //console.log(nameCripto)
    return (
        <Tr >
            <Th scope="row">{cripto.FROMSYMBOL}</Th>
            <Td>
                <Link to={{pathname: "/my-cripto-app/Chart", aboutProps: {nCripto: {nameCripto, name}}}} >
                    {name}
                </Link>
            </Td>
            <Td>
                {cripto.PRICE}
            </Td>
            <Td>
                {cripto.OPENDAY}
            </Td>
            <Td>
                {cripto.HIGH24HOUR}
            </Td>
            <Td>
                {cripto.LOW24HOUR}
            </Td>
            <Td>
                {cripto.MKTCAP}
            </Td>
            <Td>
                {cripto.CHANGE24HOUR}
            </Td>
        </Tr>
    );
}

export default Row;