import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { taskSchema } from '../schemas/auth'
import { getTask, editTask } from '../services/tasks'

function EditTask() {
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
    fetchTask()
  }, [id])

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(taskSchema),
  })

  const handleEdit = async (body) => {
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
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit(handleEdit)}>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              margin="dense"
              variant="outlined"
              label="Título"
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
              margin="dense"
              variant="outlined"
              label="Descrição"
              error={Boolean(errors.description)}
              helperText={errors.description?.message}
              {...field}
            />
          )}
        />
        <Button
          variant="outlined"
          color="primary"
          style={{ marginTop: '10px' }}
          onClick={() => {
            navigate('/')
          }}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
        >
          Salvar
        </Button>
      </form>
    </React.Fragment>
  )
}

export default EditTask
