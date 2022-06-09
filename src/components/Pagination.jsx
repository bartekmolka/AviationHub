import React from "react";
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'


export default function PaginationContainer({children, tabs, }) {
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
        <div className="w-90">
            <Pagination>
                <Pagination.Prev />
                <Pagination>{items}</Pagination>
                <Pagination.Next />
            </Pagination>
            <hr />
            {children}
        </div>
    )
}