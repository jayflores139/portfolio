import React from 'react'
import DownloadBtn from './DownloadBtn'
import joemyJay from 'images/joemy-jay.jpg'

const imageStyle = {
    position: 'relative',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top'
}

const RightLayout = () => {
	return (
		<div className="col-md-6">
      <div className="right-layout">
      	<div className="wrapper-for-img-btn">
      	<div className="button-wrapper">
      		<DownloadBtn/>
      	</div>
      		<div className="profile-img">
            <img className="w-100"
              style={imageStyle}
              alt="Joemy Jay Flores"
              src={joemyJay}
            />
          </div>

      	</div>
      </div>
    </div>
	)
}

export default RightLayout