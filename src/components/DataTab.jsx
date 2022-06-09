import React from "react";
import Table from 'react-bootstrap/Table'

export default function DataTab({data}) {
    return (
        <div>
        <Table striped bordered hover variant="light" responsive>
            <thead>
                <tr>
                    {Object.keys(data[0]).map(e => <th>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(e => <tr>{Object.values(e).map(e => <td>{e}</td>)}</tr>)}
            </tbody>
        </Table>
        </div>
    );
}