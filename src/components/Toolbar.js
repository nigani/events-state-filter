import React from 'react';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    return (
      <div className="toolbar">
        {filters.map((filter) => (
          <button key={filter} className={filter==selected ? "button-select": "button"} onClick={() => onSelectFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
    );
  }
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

export default Toolbar;
