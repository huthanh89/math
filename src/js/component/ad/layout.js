
import React from 'react';

class AdComponent extends React.Component {

    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <ins className='adsbygoogle'
                style={{ display: 'block' }}
                data-ad-client='ca-pub-4342286684165248'
                data-ad-slot='7331065731'
                data-ad-format='auto' />
        );
    }
}

export default AdComponent;