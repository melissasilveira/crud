import { useForm, Controller } from 'react-hook-form'
import { TextField, Button } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'

import { taskSchema } from '../schemas/auth'

function CreateTask() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(taskSchema),
  })

  const handleCreate = () => {
    console.log(handleCreate)
  }

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <h2>Criar Tarefa</h2>
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
  )
}

export default CreateTask
