import React, { useState } from "react";
import "./SearchComponent.css"
import { FaAngleRight,  FaAngleDown} from "react-icons/fa6";

function SearchComponent({filterValues}) {

    const [dropDownKey, setDropDownKey] = useState("none");
    const [selectedValues, setSelectedValues] = useState(filterValues);
    const [dropDownVisible, setDropDownVisible] = useState(false);
    const filterKeys = Object.keys(filterValues);

    // the function that handles the display of the dropdown
    function getFilterData(filterKey) {
        console.log(dropDownVisible)
        if(!dropDownVisible) {
            // setting the to view filter to activate the drop down elements
            setDropDownKey(filterKey);
        }else if(dropDownVisible && filterKey != dropDownKey) {
            // setting the to view filter to activate the drop down elements
            setDropDownKey(filterKey)
        }
        else {
            // unset the filter to view value to collapse the dropdown values
            setDropDownKey("none");
        }
    }

    // the function which handles the value selection of the dropdown element
    function valueSelectionHandler(value) {
        setSelectedValues(prev => ({...prev, [dropDownKey]: value}))
        setDropDownKey("none");
    }

    // the function which handles the element searching
    function searchHandler() {
        console.log("searching elements");
    }

    const values = ["value 1","value 2","value 3","value 4","value 5","value 6","value 7","value 8","value 9","value 10","value 11","value 12","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15","value 13","value 14","value 15"];

    return (
        // this is the whole search component is defined
        <div className="search-component">
            <div className="filters-container">
                {/* setting the filter boxes and their values */}
                {Object.values(selectedValues).map((filterValue, index) =>

                    // this is where the drop-down element is created first
                    <div onClick={() => setDropDownVisible(prev => !prev)} key={`${filterKeys[index]}-${index}`} className={`container`}>
                        
                        {/* this is the visible element when the dropdown is not visible */}
                        <button onClick={() => getFilterData(filterKeys[index])} className={`filter-value ${(dropDownKey === filterKeys[index])? "shadow" : ""}`}>
                            
                            {/* this is the name of the value selected in the dropdown element */}
                            <div className="value">{filterValue}</div>
                            
                            {/* this is the dropdown icon and right icon */}
                            <div className="arrow">{(dropDownKey === filterKeys[index])?<FaAngleDown/> :<FaAngleRight/>}</div>
                        
                        </button>
                        
                        {/* here is the drop down container element */}
                        <div className={`dropdown-content scroll-bar ${(dropDownKey === filterKeys[index])? "visible" : ""}`}>
                           
                            {/* this is the title of inside the dropdown container box */}
                            <p className="dropdown-title"> - Select {dropDownKey} -</p>
                            
                            {/* this is the container of the drop down element */}
                            <div className="selector-value-container">
                                
                                {/* this is the list of elements that can be selected */}
                                {values.map((value, index) => <div key={`${value}-${index}`} onClick={()=>valueSelectionHandler(value)} className={`selection-value ${(value === selectedValues[filterKeys[index]])? "selected": ""}`}>{value}</div>)}
                            
                            </div>
                        
                        </div>
                    </div>
                )}
            </div>

            {/* this is the search button which handles the searching relative to the filters */}
            <button onClick={()=>searchHandler()} className="search-button">Search</button>
        </div>
    )
}

export default SearchComponent;
