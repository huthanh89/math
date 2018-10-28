
import React from 'react';
import { Link } from 'react-router-dom';

class AdComponent extends React.Component {

    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <div className="adsense-fullview-container">
                <div className="adsense-fullview">
                    <Link to='/'>
                        <button className="d-block float-right" >
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </Link>
                    <ins className='adsbygoogle'
                        style={{ 
                            display: 'block',
                            height:  '300px',
                            width:   '300px'
                        }}
                        data-ad-client='ca-pub-4342286684165248'
                        data-ad-slot=  '2209748334'
                        />
                </div>
            </div>
        );
    }
}

export default AdComponent;