import React, { useState } from "react";
import Pagination from 'react-bootstrap/Pagination'
import { useSearchParams } from 'react-router-dom'
import GetData from "./GetData";
import DataTab from "./DataTab"
import * as styles from '../styles/Pagination.module.css'


export default function PaginationContainer({ children, tabs, }) {
    async function fetchData() {
        const data =  await fetch(`http://localhost:3000/airports/page/${active || 1}`).then(res => res.json());
        console.log(data)
        return data
    }
    let [active, setActive] = useState(1)
    let items = [];
    for (let number = 1; number <= tabs; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }
    return (
        <div className="wd-90"> 
            <GetData />

            <hr />
            <DataTab data={fetchData() || []}/>
            <div className={styles.searching}>
                <Pagination>
                    <Pagination.First onClick={() => setActive(1)} />
                    <Pagination.Prev disabled={active < 0} onClick={() => setActive(active - 1)}/>
                    <Pagination.Ellipsis />
                    <Pagination.Item active>{active}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Next disabled={active > tabs} onClick={() => setActive(active + 1)}/>
                    <Pagination.Last onClick={() => setActive(tabs)}/>
                </Pagination>
            </div>
        </div>
    )
}