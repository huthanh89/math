
import React from 'react';

class AdComponent extends React.Component {

    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <ins className='adsbygoogle'
                style={{ 
                    display: 'block'
                }}
                data-ad-client='ca-pub-4342286684165248'
                data-ad-slot=  '8306339708'
                data-ad-format='auto' 
                data-full-width-response="true"
                />
        );
    }
}

export default AdComponent;