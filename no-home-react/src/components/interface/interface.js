import React from 'react';

class Interface extends React.Component{
    render(){
        return(
            <div className='interface'>
                <div className='levelName'>
                    Level Name
                    <p>Area Name </p>
                </div>

                <div className='inventory'>
                    Inventory
                </div>
            </div>            
        )
    }
}

export default Interface;