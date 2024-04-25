import React from 'react';

const Table = ({data}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso Neto</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.brand}</td>
                        <td>${item.income.toFixed(2)}</td>
                    </tr>
                ))}
                <p>El promedio de ganancia es ${(data.reduce((total, item) => total + item.income, 0) / data.length).toFixed(2)}</p>
            </tbody>
        </table>
    );
};

export default Table;