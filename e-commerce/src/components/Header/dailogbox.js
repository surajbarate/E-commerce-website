import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function LocationModal() {

    const [selectedLocation, setSelectedLocation] = useState("Your Location");
    const [searchquery, setSearchQuery] = useState("");

    const countries = [
        "India",
        "United States",
        "Canada",
        "Australia",
        "United Kingdom",
        "Germany",
        "France",
        "Japan",
        "South Korea",
        "Brazil",
        "Mexico",
        "South Africa",
        "Italy",
        "Russia",
        "Argentina"
    ];

    const selectCountry = (country) => {
        setSelectedLocation(country);  // Update state with the selected country

    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // Update the search query state
    };

    // Filter countries based on the search query
    const filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(searchquery.toLowerCase()) // Case-insensitive search
    );


    return (
        <div>
            {/* Button to trigger modal */}
            <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModalLong" style={{ height: '45px' }}>
                {selectedLocation}  {/* Display the selected location */}
            </button>

            {/* Modal */}
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Select Your Location</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Search bar */}
                            <nav className="navbar navbar-light bg-light">
                                <form className="form-inline">
                                    <input
                                        className="form-control mr-sm-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                        value={searchquery}
                                        onChange={handleSearchChange} // Handle search input change
                                    />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </nav>

                            {/* List of filtered countries */}
                            <ul className="list-group mt-3 no-border-list scroll">
                                {filteredCountries.map((country, index) => (
                                    <li className="list-group-item" key={index}>
                                        <button className="btn btn-outline-success w-100 text-left" onClick={() => selectCountry(country)}>
                                            {country}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationModal;
