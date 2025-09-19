import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import userLoader from 'hooks/userLoader'
import { createTranscriptionThunk } from 'redux-thunk/thunk/transcription.thunk'

const useCreateTranscriptionController = () => {
  const { submitLoader } = userLoader()
  const history = useHistory()
  const dispatch = useDispatch()

  const createAudioTranscriptionSchema = yup.object({
    audioUrl: yup.string()
      .url('Audio URL must be a valid HTTP/HTTPS URL')
      .required('Audio URL is required')
  })

  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    resetForm
  } = useFormik({
    initialValues: {
      audioUrl: ''
    },
    validationSchema: createAudioTranscriptionSchema,
    onSubmit: (formValues) => {
      dispatch(createTranscriptionThunk({ payload: formValues, history, resetForm }))
    },
    validateOnChange: true,
    validateOnBlur: true
  })

  return {
    submitLoader,
    handleSubmit,
    values,
    handleChange,
    errors,
    touched,
    handleBlur
  }
}

export default useCreateTranscriptionController
