import { FilterBtn } from '../FilterBtn/FilterBtn';

export const Filter = ({ setStatus, setGender, setSpecies }) => {
  const statusData = ['alive', 'dead', 'unknown'];
  const genderData = ['male', 'famele', 'unknown', 'genderless'];
  const speciesData = [
    'human',
    'alien',
    'humanoid',
    'poopybutthole',
    'unknown',
    'animal',
    'robot',
    'cronenberg',
  ];

  const clearFilters = () => {
    window.location.reload();
  };

  return (
    <div>
      <h3 className='text-center'>Filter</h3>
      <p
        style={{ cursor: 'pointer' }}
        className='text-primary text-center text-decoration-underline'
        onClick={clearFilters}
      >
        Clear all
      </p>
      <div
        className='accordion'
        id='accordionExample'
      >
        <div className='accordion-item'>
          <h2
            className='accordion-header'
            id='headingOne'
          >
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Filter by Status
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body d-flex align-items-center flex-wrap gap-3'>
              {statusData.map((el, index) => (
                <FilterBtn
                  setState={setStatus}
                  key={index}
                  text={el}
                  index={index}
                  name='status'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2
            className='accordion-header'
            id='headingTwo'
          >
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Filter by Species
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body d-flex align-items-center flex-wrap gap-3'>
              {speciesData.map((el, index) => (
                <FilterBtn
                  setState={setSpecies}
                  key={index}
                  text={el}
                  index={index}
                  name='species'
                />
              ))}
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2
            className='accordion-header'
            id='headingThree'
          >
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Filter by Gender
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body d-flex align-items-center flex-wrap gap-3'>
              {genderData.map((el, index) => (
                <FilterBtn
                  setState={setGender}
                  text={el}
                  index={index}
                  name='gender'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
