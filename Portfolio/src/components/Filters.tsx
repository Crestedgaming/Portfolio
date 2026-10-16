import type { Filter } from '../types';

type FiltersProps = {
  availableFilters: Exclude<Filter, 'All'>[];
  setSelectedFilter: (filter: Filter) => void;
  selectedFilter: Filter;
};

const Filters = ({
  availableFilters,
  setSelectedFilter,
  selectedFilter,
}: FiltersProps) => {
  return (
    <div className="filters">
      <button
        type="button"
        onClick={() => setSelectedFilter('All')}
        className={selectedFilter === 'All' ? 'active' : ''}
        aria-pressed={selectedFilter === 'All'}
      >
        All
      </button>
      {availableFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => setSelectedFilter(filter)}
          className={selectedFilter === filter ? 'active' : ''}
          aria-pressed={selectedFilter === filter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;