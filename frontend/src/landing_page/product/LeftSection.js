import React from 'react';

function LeftScetion({
    imageURL,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL} alt="" />
                </div>
                <div className='col-6 mt-5 p-5'>
                    <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="googlePlayBadge"/>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="appstoreBadge"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
                </div>
            </div>
        </div>
     );
}

export default LeftScetion;