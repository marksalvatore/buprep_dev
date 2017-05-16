import React from 'react';
import PropTypes from 'prop-types';

const Drill = (props) => {
  /* called by NewRoutineRender */

  const { drill, index, isDrillSelected, selectedCategory, toggleSelectItem } = props;
  const isSelected = isDrillSelected(props.id);
  const diagram = <img onClick={toggleSelectItem} src={drill.url} alt={drill.title} data-id={drill.id} data-index={index} />
  const buttonText = isSelected === true ? 'Selected' : 'Select this drill';
  const button = 
          <div className={`button ${isSelected === true ? 'item-button active' : 'item-button'}`} 
               onClick={toggleSelectItem} 
               data-id={drill.id}
               data-index={index}>

              {buttonText}
          </div>

  return (
    <li className={(selectedCategory === drill.category) ? null : 'hide'}>
        <div className="item-title">
            {drill.title}
        </div>
        {diagram}
        {button}
        <hr />
    </li>
  );
}

Drill.propTypes = {
  drill: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  isDrillSelected: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  toggleSelectItem: PropTypes.func.isRequired,
}

export default Drill;



