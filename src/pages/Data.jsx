import React from "react";
import DataTab from "../components/DataTab";
import PaginationContainer from "../components/Pagination";

const data =  await fetch("http://localhost:3000/airports/all").then(res => res.json());

const tabSize = 10;

console.log(data);

export default function Data() {
    return (
        <div>
            <h1>Data</h1>
            <PaginationContainer tabs={Math.ceil(data.length / tabSize)}>
                <DataTab data={data}/>
            </PaginationContainer>
        </div>
    );
}