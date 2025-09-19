import { LOADER_HANDLER_TYPES } from 'constants/index'
import Loader from 'layouts/Loader/index'
import useListTranscriptionsController from './controller/useListTranscriptionsController'

const ListTranscriptions = () => {
  const {
    tableLoader, setPage, setLimit, totalPages,
    page, limit, allTranscriptions
  } = useListTranscriptionsController()

  return (
    <div className='container'>
      <div className='row mt-4 mb-3'>
        <div className='col-md-12'>
          <label className='form-label'>Records per Page</label>
          <select
            className='form-select'
            value={limit}
            onChange={e => {
              setLimit(Number(e.target.value))
              setPage(1)
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className='table-responsive py-2'>
        <table className='table table-bordered table-hover'>
          <thead className='table-dark'>
            <tr>
              <th className='text-center'>S.No.</th>
              <th className='text-center'>Audio Url</th>
              <th className='text-center'>Transcription</th>
            </tr>
          </thead>
          <tbody>
            {
              tableLoader
                ? (
                  <tr>
                    <td colSpan='7' className='text-center'>
                      <div><Loader variant={LOADER_HANDLER_TYPES.table} loaderSize={50} /></div>
                    </td>
                  </tr>
                  )
                : (
                    !allTranscriptions.length
                      ? <tr><td colSpan='7' className='text-center fs-6'>No records Found !</td></tr>
                      : allTranscriptions.map((tx, index) => (
                        <tr key={tx._id}>
                          <th className='text-center'>{(page - 1) * limit + index + 1}</th>
                          <td className='text-center'>{tx.audioUrl}</td>
                          <td className='text-center'>{tx.transcription}</td>
                        </tr>
                      ))
                  )
            }
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='d-flex justify-content-center'>
        <div className='w-25 flex-end d-flex justify-content-between align-items-center mt-3'>
          <button
            className='btn btn-dark'
            disabled={(page === 1) || tableLoader}
            onClick={() => setPage(prev => prev - 1)}
          >
            Prev
          </button>
          <span>Page {page} of {totalPages}</span>
          <button
            className='btn btn-dark'
            disabled={(page >= totalPages) || tableLoader}
            onClick={() => setPage(prev => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListTranscriptions
