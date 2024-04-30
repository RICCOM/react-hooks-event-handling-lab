import React from 'react';

function Keypad() {
    // Handler function for the change event
    const handleChange = () => {
        console.log('Entering password...');
    };

    return (
        <div className="keypad">
            {/* Input field of type password */}
            <input
                type="password"
                onChange={handleChange}
                placeholder="Enter password"
            />
        </div>
    );
}

export default Keypad;

