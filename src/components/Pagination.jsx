import React from "react";
import Pagination from 'react-bootstrap/Pagination'
import { useSearchParams } from 'react-router-dom'
import GetData from "./GetAllData";
import * as styles from '../styles/Pagination.module.css'

export default function PaginationContainer({ children, tabs, }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const p = searchParams.get("p")
    let active = 2;
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
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Ellipsis />
                    <Pagination active>{items[p - 1]}</Pagination>
                    <Pagination.Ellipsis />
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
        </div>
    )
}