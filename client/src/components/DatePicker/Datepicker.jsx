import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setInitialDate,
  setFinalDate,
  selectInitialDate,
  selectFinalDate
} from '../../redux/store'

const Datepicker = () => {
  const dispatch = useDispatch()
  const initialDate = useSelector(selectInitialDate)
  const finalDate = useSelector(selectFinalDate)
  const [disabled, setDisabled] = useState(true)

  const minDate = '2010-01-01'
  const maxDate = '2020-12-31'

  const handleInitialDate = event => {
    const { value } = event.target
    dispatch(setInitialDate(value))
    setDisabled(value === '' ? true : false)
  }

  const handleFinalDate = event => {
    const { value } = event.target
    dispatch(setFinalDate(value))
  }

  const preventInput = event => {
    event.preventDefault()
  }

  const hanleReset = event => {
    event.preventDefault()
    dispatch(setInitialDate(''))
    dispatch(setFinalDate(''))
  }

  useEffect(() => {
    if (initialDate !== '') {
      setDisabled(false)
    }
  }, [initialDate, finalDate])

  return (
    <div>
      <form className='md:w-100 mx-auto bg-gray-50 p-4 md:shadow  dark:bg-indigo-600 dark:text-white max-md:dark:bg-transparent'>
        <div className='md:mb-6 mb-2 pb-2 border-b border-gray-300 dark:border-gray-700 flex items-center'>
          <h1 className='text-2xl max-md:text-lg font-semibold text-gray-900 dark:text-white'>
            Selecione el rango de fechas
          </h1>
        </div>
        <div className='flex-column items-center'>
          <div className='md:mb-6 md:mr-4 mb-2'>
            <label
              htmlFor='InitialDate'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Fecha Inicial:
            </label>
            <input
              type='date'
              id='initialDate'
              value={initialDate}
              onChange={handleInitialDate}
              onKeyDown={preventInput}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-md:p-1'
              required
              min={minDate}
              max={maxDate}
            />
          </div>
          <div className='md:mb-6 md:mr-4 mb-4'>
            <label
              htmlFor='finaleDate'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Fecha Final:
            </label>
            <input
              type='date'
              id='finaleDate'
              value={finalDate}
              onChange={handleFinalDate}
              onKeyDown={preventInput}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-md:p-1'
              required
              disabled={disabled}
              min={minDate}
              max={maxDate}
            />
          </div>

          <button
            type='button'
            onClick={hanleReset}
            className='md:mb-6 text-white bg-blue-700 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-yellow-500 dark:focus:ring-blue-800 max-md:p-1'
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Datepicker
