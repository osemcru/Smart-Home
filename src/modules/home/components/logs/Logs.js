import React, { useState, useEffect } from 'react'
import { Button } from "antd";

import api from "@api/sensor";

import { Container, Panel } from "./styles";
import { Link } from 'react-router-dom';

function Logs() {
  const [logs, setLogs] = useState('')

const username = 'papuGarces';

const data = {username}
  useEffect(() => {
    function getMostRecentLogs() {
      api.checkTemperature()
        .then(response => setLogs(logs + '\n' + response?.message))
        .catch((error) => setLogs(logs + '\n' + error?.message && 'ERROR'))

      api.checkHumidity()
        .then(response => setLogs(logs + '\n' + response?.message))
        .catch((error) => setLogs(logs + '\n' + error?.message && 'ERROR'))
    }

    setInterval(getMostRecentLogs, 20000)
  }, [logs])

  async function handleMovement(e) {
    e.preventDefault();

    api.checkMovement(data)
      .then(response => setLogs(logs + '\n' + response?.message))
      .catch(() => setLogs(logs + '\n' + 'ERROR'))
  }

  async function handleStatus(e) {
    e.preventDefault();

    api.checkStatus(data)
      .then(response => setLogs(logs + '\n' + response?.message))
      .catch(() => setLogs(logs + '\n' + 'ERROR'))
  }


  return (
    <Container>
      <Panel>
        {logs||""}
      </Panel>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
        <Button onClick={handleMovement}>Movimiento</Button>
        <Button onClick={handleStatus}>Apertura</Button>
        <Link to={'/RegisterFranja'}>Registrar Franja</Link>
      </div>
    </Container>
  )
}

export default Logs
