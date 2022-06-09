import React, { useRef, useState } from "react";
import { useSearchParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as styles from '../styles/GetAllData.module.css'

export default function GetData(params) {
    const [searchParams, setSearchParams] = useSearchParams();
    const ref = useRef();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTargetvalue;
        setInputs(values => ({ ...values, [name]: value }))
        console.log(event.currentTarget.name)
    }

    const send = (e) => {
        e.preventDefault()
        setSearchParams(inputs)
    }

    return (
        <form action="/data" method="GET" className={styles.searching}>
            <div className={styles.forms}>
                <Form.Label htmlFor="input">Site Number: </Form.Label>
                <Form.Control
                    type="text"
                    id="input"
                    aria-describedby="passwordHelpBlock"
                    name="p"
                    ref={ref} onChange={handleChange}
                    className={styles.input}
                />
                <Button type="submit" onSubmit={send} variant="dark" > Szukaj </Button>
            </div>

        </form>

    )
};
