import React from "react";

export default function DataTab({data}) {
    return (
        <div>
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map(e => <th>{e}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map(e => <tr>{Object.values(e).map(e => <td>{e}</td>)}</tr>)}
            </tbody>
        </table>
        </div>
    );
}