import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { taskSchema } from '../schemas/auth'
import React from 'react'

function EditTask() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskSchema),
  })

  const handleEdit = () => {
    console.log(handleEdit)
  }

  const navigate = useNavigate()

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
