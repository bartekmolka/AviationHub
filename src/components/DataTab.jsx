import React from "react";
import Table from 'react-bootstrap/Table'

export default function DataTab({data}) {
    return (
        <div>
        <Table striped bordered hover variant="light" responsive>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((e, i)=> <th key={i}>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((e, i) => <tr key={i}>{Object.values(e).map((e, i) => <td key={i}>{e}</td>)}</tr>)}
            </tbody>
        </Table>
        </div>
    );
}