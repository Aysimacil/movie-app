const SearchBox = () => {
  return (
    <div className='mb-6 mt-[110px] dark:bg-gray-800 dark:text-white xl:w-96'>
      <form>
        <div className='input-group relative flex w-full flex-wrap items-stretch'>
          <input
            type='search'
            className='form-control relative m-0 block w-full min-w-0 flex-auto rounded bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none dark:bg-gray-900 dark:text-gray-100'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
          <button
            className='btn flex items-center rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition  duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg dark:bg-gray-700 dark:hover:bg-gray-800'
            type='submit'
            id='button-addon2'>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='search'
              className='w-4'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'>
              <path
                fill='currentColor'
                d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
