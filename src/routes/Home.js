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
  Box,
  CircularProgress,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'

import { getTasks } from '../services/tasks'
import DeleteAlertDialog from '../components/DeleteAlertDialog'

import styled from '@emotion/styled'

function Home() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [shouldReload, setShouldReload] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await getTasks()
        setIsLoading(false)
        setTasks(data.tasks)
        setShouldReload(false)
      } catch {
        console.log('Ocorreu um erro ao buscar as tarefas.')
      }
    }
    if (shouldReload) {
      fetchTasks()
    }
  }, [shouldReload])

  const reload = () => setShouldReload(true)

  if (isLoading) {
    return (
      <StyledBox>
        <CircularProgress />
      </StyledBox>
    )
  } else {
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
                    <DeleteAlertDialog id={row.id} shouldRefetch={reload} />
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

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export default Home
