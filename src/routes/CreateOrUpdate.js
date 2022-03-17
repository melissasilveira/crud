import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { taskSchema } from '../schemas/auth'
import { postTask, getTask, editTask } from '../services/tasks'

import styled from '@emotion/styled'

function CreateOrUpdate() {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await getTask(id)
        setValue('title', data.task.title, { shouldValidate: true })
        setValue('description', data.task.description, { shouldValidate: true })
      } catch (error) {
        console.log('Ocorreu um erro ao buscar a tarefa.')
        console.log(error)
      }
    }
    if (id) {
      fetchTask()
    }
  }, [id])

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(taskSchema),
  })

  const handleCreate = async (body) => {
    try {
      await postTask(body)
      toast.success('Tarefa criada com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (body) => {
    try {
      await editTask(id, body)
      toast.success('Tarefa editada com sucesso.', {
        position: toast.POSITION.TOP_CENTER,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
      console.log('body: ', body)
      console.log('id: ', id)
    }
  }

  return (
    <React.Fragment>
      <ContentBox>
        <Title>{id ? 'Editar Tarefa' : 'Criar Tarefa'}</Title>
        <Form
          onSubmit={
            id ? handleSubmit(handleUpdate) : handleSubmit(handleCreate)
          }
        >
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                margin="dense"
                variant="outlined"
                label="Título"
                color="secondary"
                error={Boolean(errors.title)}
                helperText={errors.title?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                id="outlined-multiline-flexible"
                margin="dense"
                multiline
                variant="outlined"
                label="Descrição"
                color="secondary"
                error={Boolean(errors.description)}
                helperText={errors.description?.message}
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ marginTop: '10px' }}
          >
            {id ? 'Salvar' : 'Criar'}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginTop: '10px' }}
            onClick={() => {
              navigate('/')
            }}
          >
            Cancelar
          </Button>
        </Form>
      </ContentBox>
    </React.Fragment>
  )
}

const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding: 30px;
  color: #4e4a4a;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 30px;
  margin: 20px;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default CreateOrUpdate
