import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

import { taskSchema } from '../schemas/auth'
import React from 'react'

function CreateTask() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskSchema),
  })

  const handleCreate = (data) => {
    console.log(data)
  }

  const navigate = useNavigate()

  return (
    <React.Fragment>
      <h2>Criar Tarefa</h2>
      <Button
        variant="contained"
        onClick={() => {
          navigate('/')
        }}
      >
        Home
      </Button>

      <form onSubmit={handleSubmit(handleCreate)}>
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
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
        >
          Criar
        </Button>
      </form>
    </React.Fragment>
  )
}

export default CreateTask
