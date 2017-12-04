import React from 'react';
import { Button } from 'reactstrap';

import Sidebar from '../shared/Sidebar';
import DropDown from './DropDown';

const showAlert = () => {

    alert('we are deleting your system');
}



const HomePage = () => {

    return (
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <p>This is the Home Page.</p>
                    <DropDown />
                    <p>push the button</p>
                    <button onClick={showAlert}>Push</button>
                </div>
                <Sidebar />
            </div>
        )
}

export default HomePage;
