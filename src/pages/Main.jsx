import React from "react";
import { Card, Button } from "react-bootstrap"

export default function Main() {
  return (
    <div>
      <h1 className="mx-auto">Strona główna</h1>
      <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://as2.ftcdn.net/v2/jpg/02/71/78/29/1000_F_271782927_keMVFo9PnBwrMEmbiUGKRcDT2rzf85dj.jpg" />
        <Card.Body>
          <Card.Title>Aviation hub</Card.Title>
          <Card.Text>
            Simpleest way to find nearest airport
          </Card.Text>
          <Button variant="primary"><a className="text-reset" href="/data">Search for airport</a></Button>
        </Card.Body>
      </Card>
    </div>
  );
}   

