import React from "react";

interface Props {
    currentFilter: 'all' | 'active' | 'completed';
    onChange: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterButtons: React.FC<Props> = ({ currentFilter, onChange }) => {
    const filters: ('all' | 'active' | 'completed')[] = ['all', 'active', 'completed'];

    return (
        <div className="flex space-x-2 mb-4">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`px-4 py-1 rounded-full border ${
                        currentFilter === filter
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                    }`}
                    onClick={() => onChange(filter)}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;