import React from 'react';
import './banner.scss'

function Banner(props) {
    return (
        <div className="banner pd">
            <div className="col">
                <div className="title1">
                    Nest One is the first SkyScraper in Uzbekistan
                </div>
                <div className="title2">
                    Turn Office purchase into Investment
                </div>
            </div>
            <div className="col">
                <div className="center-col">
                    <div className="circle1">
                        Play
                    </div>
                    <div className="title3">
                        Video presentation
                    </div>
                </div>
            </div>
              <div className="col">
                  <div className="title4">
                      It is not just meters, we adhere to the highest quality standards
                      in the region
                  </div>
              </div>
        </div>
    );
}

export default Banner;