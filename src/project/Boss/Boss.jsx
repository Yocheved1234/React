import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styleBose.css'; // נכלול את קובץ ה-CSS

export const Boss = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Boss Dashboard</h1>
            <div className="button-container">
                <button onClick={() => navigate('/AddCare')}>Add Car</button>
                <button onClick={() => navigate('/UpdateCar')}>Update Car</button>
                <button onClick={() => navigate('/RemoveCar')}>Remove Car</button>
                <button onClick={() => navigate('/SeeR')}>See Orders</button>
                <button onClick={() => navigate('/TypesPrice')}>See TypesCars</button>
                <button onClick={() => navigate('/typesCarsPrice')}>Change Price of TypesCars</button>
                <button onClick={() => navigate('/addDegem')}>Add Degem</button>
                <button onClick={() => navigate('/Car')}>See All Cars</button>
                <button onClick={() => navigate('/Degem')}>See Degem</button>
            </div>
        </div>
    );
};

export default Boss;