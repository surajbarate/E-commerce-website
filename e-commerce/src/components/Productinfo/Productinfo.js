
import React, { useState } from 'react';

const Productinfo = ({ closeProductDetails }) => {




    return (

        <div className="container ">
            {/* Dialog Box */}

            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>All Natural Italian-Style Chicken Meatballs</h2>
                    <p>This is the dialog content!</p>
                    <button className="btn btn-secondary" onClick={closeProductDetails}>
                        Close
                    </button>

                </div>
            </div>
        </div>

    );
}

export default Productinfo;
