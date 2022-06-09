import React from "react";
import Table from 'react-bootstrap/Table'

export default function DataTab({data}) {

    const dane = [...data]
    console.log(dane)
    return (
        <div>
        <Table striped bordered hover variant="light" responsive>
            {dane ?
            <>
                <thead>
                    <tr>
                        {Object.keys(dane[0] || []).map((e, i) => <th key={i}>{e}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {dane.forEach((e, i) => <tr key={i}>{Object.values(e).map((e, i) => <td key={i}>{e}</td>)}</tr>)}
                </tbody>
            </>
                :
                <h3>Błąd ładowania danych</h3>
            }
        </Table>
        </div>
    );
}