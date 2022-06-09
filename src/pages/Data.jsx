import React from "react";
import DataTab from "../components/DataTab";
import PaginationContainer from "../components/Pagination";
import qs from 'qs'

const num = await fetch(`http://localhost:3000/airports/count`).then(res => res.json());

const tabSize = 10;

export default function Data() {
    return (
        <div>
            <PaginationContainer tabs={Math.ceil(num.count / tabSize)}>
                
            </PaginationContainer>
        </div>
    );
}