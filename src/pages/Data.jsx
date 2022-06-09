import React from "react";
import DataTab from "../components/DataTab";
import PaginationContainer from "../components/Pagination";
import qs from 'qs'

const parsed = qs.parse(window.location.search, { ignoreQueryPrefix: true })
const num = await fetch(`http://localhost:3000/airports/count`).then(res => res.json());
const data =  await fetch(`http://localhost:3000/airports/page/${parsed.p || 1}`).then(res => res.json());

const tabSize = 10;

export default function Data() {
    return (
        <div>
            <PaginationContainer tabs={Math.ceil(num.count / tabSize)}>
                <DataTab data={data}/>
            </PaginationContainer>
        </div>
    );
}