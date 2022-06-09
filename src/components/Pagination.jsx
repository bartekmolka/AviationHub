import React from "react";
import Pagination from 'react-bootstrap/Pagination'
import { useSearchParams } from 'react-router-dom'
import GetData from "./GetData";
import * as styles from '../styles/Pagination.module.css'

const baseUrl = '/data?p='

export default function PaginationContainer({ children, tabs, }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const p = searchParams.get("p")
    let active = parseInt(p.toString()) || 1;
    let items = [];
    for (let number = 1; number <= tabs; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                <a href={`/data?p=${number}`}>{number}</a>
            </Pagination.Item>
        );
    }
    return (
        <div className="wd-90"> 
            <GetData />

            <hr />
            {children}
            <div className={styles.searching}>
                <Pagination>
                    <Pagination.First href={baseUrl + 1} />
                    <Pagination.Prev disabled={active <= 0} href={baseUrl + (active - 1)}/>
                    <Pagination.Item active>{active - 1}</Pagination.Item>
                    <Pagination.Next disabled={active >= tabs} href={baseUrl + (active + 1)}/>
                    <Pagination.Last href={baseUrl + (tabs - 1)}/>
                </Pagination>
            </div>
        </div>
    )
}