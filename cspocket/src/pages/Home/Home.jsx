import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import cspocket from './../../images/cspocket.jfif';

function Home() {
    const [typeEffect] = useTypewriter({
        words: [
            'Used car Buying and Selling',
            'Easy to Use',
            'Advanced Search Filtering',
            'Unique Feature Direct Owner and Dealers',
            '1Lakhs Users',
        ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                            <h3 className='mb-5 text-warning fw-bold'>Welcome To cspocket  </h3>
                            <h4 className='mb-5 text-success fw-bold'>{typeEffect}</h4>
                            <button className='text-white bg-danger' onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.cs.pocket"}>
                                Download Now
                            </button>
                        </div>
                        <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center p-5 '>
                                <img src={cspocket} className='img-fluid  w-80' alt="cspocket" />
                        </div>
                        
                    </div>
                     
                </div>
                
                
            </header>
            
        </div>
    )
}

export default Home;
