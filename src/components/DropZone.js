import React from 'react';
import "./DropZone.css";

const DropZone = () => {
    return(
        <div className="container">
            <div className="drop-container">
                <div className="drop-message">
                    <div className="upload-icon"></div>
                    Dra og slipp filene her eller klikk
                </div>
            </div>
        </div>
    )
}

export default DropZone;