import React from 'react'
import Loader from 'layouts/Loader/index'
import { LOADER_HANDLER_TYPES } from 'constants/index'
import useCreateTranscriptionController from './controller/useCreateTranscriptionController'

const CreateTranscriptionPage = () => {
  const {
    submitLoader, handleSubmit, values,
    handleChange, errors, touched, handleBlur
  } = useCreateTranscriptionController()

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <h2 className='text-center mb-4'>
            Welcome to Audio Transcription App
          </h2>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='card shadow'>
              <div className='card-title text-center border-bottom'>
                <h4 className='p-3'>
                  Create Audio Transcription
                </h4>
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit}>
                  <div className='h-100'>
                    <label htmlFor='name' className='form-label'>Audio Url (Should be url)</label>
                    <input
                      name='audioUrl'
                      type='url'
                      className='form-control'
                      id='url'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.audioUrl}
                    />
                    {touched.audioUrl && errors.audioUrl && (
                      <span className='error-msg'>{errors.audioUrl}</span>
                    )}
                  </div>
                  <div className='d-grid'>
                    <button
                      type='submit'
                      className='btn text-light main-bg'
                      disabled={submitLoader}
                    >
                      {
                        submitLoader
                          ? <Loader variant={LOADER_HANDLER_TYPES.submit} loaderColor='#FFFFFF' loaderSize={8} />
                          : 'Create Transcription'
                      }
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTranscriptionPage
