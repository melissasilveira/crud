import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
})

export const taskSchema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(3, 'Título deve ter no mínimo 3 caracteres.'),
  description: yup
    .string()
    .required()
    .min(10, 'Descrição deve ter no mínimo 10 caracteres.'),
})
