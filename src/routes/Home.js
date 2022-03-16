import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Fab,
  IconButton,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'

import { getTasks } from '../services/tasks'
import AlertDialog from '../components/delete'

function Home() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await getTasks()
        setTasks(data.tasks)
      } catch {
        console.log('Ocorreu um erro ao buscar as tarefas.')
      }
    }
    fetchTasks()
  }, [])

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Tarefa</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      navigate(`/edit/${row.id}`)
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <AlertDialog id={row.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        color="secondary"
        variant="extended"
        aria-label="add"
        onClick={() => {
          navigate('/create')
        }}
      >
        <AddIcon />
        Criar Tarefa
      </Fab>
    </Container>
  )
}

export default Home
