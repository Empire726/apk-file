import React from 'react'
import { Helmet } from 'react-helmet';
import css from "../../Component/images/splashlogo.png"
import "../../Stylesheet/Download/logo.css"
const Logo = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>CoderGuides | Home</title>
                </Helmet>
                </div>
        <div className="logo">
        <div className="diver">
                <img className="logo1-image" src={css} alt="none"/>
                <div className="anchor">
                        <a href="https://firebasestorage.googleapis.com/v0/b/whitediamond-fb513.appspot.com/o/WhiteDiamond.apk?alt=media&token=b2582935-f1a4-4c6f-b679-3b0306f64e32" className="btn">DOWNLOAD APK</a>
                </div>
                </div>
        </div>
            
        </>
    )
}
export default Logo;
