//-----------------------------------------------------------------------------//
// Import
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//

class Component extends React.Component {

    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <ins className='adsbygoogle'
                style={{ 
                    display: 'block',
                    height:  '300px',
                    width:   '300px'
                }}
                data-ad-client='ca-pub-4342286684165248'
                data-ad-slot=  '2209748334'
                />
        );
    }
}

//-----------------------------------------------------------------------------//
// Export
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//