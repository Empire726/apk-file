import React from 'react'
import css from "../../Component/images/splashlogo.png"
import "../../Stylesheet/Download/logo.css"
const Logo = () => {
    return (
        <>
        <div className="logo">
        <div className="diver">
                <img className="logo1-image" src={css} alt="none"/>
                <div className="anchor">
                    <a href="https://firebasestorage.googleapis.com/v0/b/gtrainer.appspot.com/o/base.apk?alt=media&token=72cbdd75-1352-4b78-8046-d1c6f4bb9fb1" className="btn">DOWNLOAD APK</a>
                </div>
                </div>
        </div>
            
        </>
    )
}
export default Logo;
