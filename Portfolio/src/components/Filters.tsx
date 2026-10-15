import type { Filter } from '../types';

type FiltersProps = {
    
    setSelectedFilter: (filter: Filter) => void;
    selectedFilter: Filter;
    
}

const Filters = ({ setSelectedFilter, selectedFilter }: FiltersProps) => {
  return (
    <div className='filters'>
      <button type="button" onClick={() => setSelectedFilter('All')} className={selectedFilter === 'All' ? 'active' : ''}>
        All
      </button>
      <button type="button" onClick={() => setSelectedFilter('React')} className={selectedFilter === 'React' ? 'active' : ''}>
        React
      </button>
      <button type="button" onClick={() => setSelectedFilter('JavaScript')} className={selectedFilter === 'JavaScript' ? 'active' : ''}>
        JavaScript
      </button>
      <button type="button" onClick={() => setSelectedFilter('TypeScript')} className={selectedFilter === 'TypeScript' ? 'active' : ''}>
        TypeScript
      </button>
      <button type="button" onClick={() => setSelectedFilter('HTML/CSS')} className={selectedFilter === 'HTML/CSS' ? 'active' : ''}>
        HTML/CSS
      </button>
      <button type="button" onClick={() => setSelectedFilter('Node.js')} className={selectedFilter === 'Node.js' ? 'active' : ''}>
        Node.js
      </button>
      <button type="button" onClick={() => setSelectedFilter('Express')} className={selectedFilter === 'Express' ? 'active' : ''}>
        Express
      </button>
      <button type="button" onClick={() => setSelectedFilter('MongoDB')} className={selectedFilter === 'MongoDB' ? 'active' : ''}>
        MongoDB
      </button>
    </div>
  )
}

export default Filters