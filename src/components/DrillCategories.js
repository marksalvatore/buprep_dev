import React from 'react';
import PropTypes from 'prop-types';
import '../css/DrillCategories.css';

const DrillCategories = (props) => {
	/* called by NewRoutineRender */

	const { categories, selectedCategory, updateCategory } = props;

	let catLabel = (cat) => {
		return cat.charAt(0).toUpperCase() + cat.slice(1);
	};

/*	let catLabel = (cat) => {
		let label = cat.charAt(0).toUpperCase() + cat.slice(1);
		return label.substr(0, label.length -1) + ' ' + label.charAt(label.length - 1);
	};
*/
  return (

		<ul className="DrillCategories">
		  { categories.map((cat, index) => {
			    return (
				    	<li key={index}><button className={selectedCategory === cat ? 'category-on' : null} onClick={(e) => updateCategory(e)} data-category={cat}>{catLabel(cat)}</button></li>
			  	);
		  	}) 
			}
		</ul>

  );
}

DrillCategories.contextTypes = {
  router: React.PropTypes.object
}

DrillCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  updateCategory: PropTypes.func.isRequired,
}

export default DrillCategories;
