import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
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

import styled from '@emotion/styled'

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
    <FlexContainer>
      <Title>Lista de Tarefas</Title>
      <StyledTableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tarefa</StyledTableCell>
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell>Ações</StyledTableCell>
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
      </StyledTableContainer>
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
    </FlexContainer>
  )
}

const Title = styled.h1`
  display: flex;
  justify-content: center;
  color: #4e4a4a;
  padding: 30px;
`

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`
const StyledTableContainer = styled(TableContainer)`
  margin-bottom: 30px;
`
const StyledTableCell = styled(TableCell)`
  background-color: #ab47bc;
  color: #ffffff;
  text-align: justify;
`

export default Home
