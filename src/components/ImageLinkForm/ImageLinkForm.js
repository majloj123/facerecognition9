import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onSubmit}) =>{
    return (
        <div>
            <p className="f3">
                {"This Magic Brain can detect faces in your pictures. Git it a try."}
            </p>
            <div className="form center">
                <div className="pa4 br3 shadow-5 smallScreen">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
                    <button className="mt1 grow f4 link ph3 pv2 dib white bg-gold " onClick={onSubmit}>Detect</button>
                </div>   
            </div>
        </div>
    )
}

export default ImageLinkForm;