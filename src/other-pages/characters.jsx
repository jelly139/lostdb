import React from 'react'
import '../assets/components/dropdownlistC'
import DropdownListC from '../assets/components/dropdownlistC'
import axios from 'axios';

const characters = () => {
    return (
        <div>
            <h1>Select a Character</h1>
            <DropdownListC />
        </div>
    );
};





export default characters