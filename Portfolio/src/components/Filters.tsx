import type { Filter } from '../types';

type FiltersProps = {
    setSelectedFilter: (filter: Filter) => void;
}

const Filters = ({ setSelectedFilter }: FiltersProps) => {
  return (
    <div>
      <button type="button" onClick={() => setSelectedFilter('All')}>All</button>
      <button type="button" onClick={() => setSelectedFilter('React')}>React</button>
      <button type="button" onClick={() => setSelectedFilter('JavaScript')}>JavaScript</button>
      <button type="button" onClick={() => setSelectedFilter('TypeScript')}>TypeScript</button>
      <button type="button" onClick={() => setSelectedFilter('HTML/CSS')}>HTML/CSS</button>
      <button type="button" onClick={() => setSelectedFilter('Node.js')}>Node.js</button>
      <button type="button" onClick={() => setSelectedFilter('Express')}>Express</button>
      <button type="button" onClick={() => setSelectedFilter('MongoDB')}>MongoDB</button>
    </div>
  )
}

export default Filters