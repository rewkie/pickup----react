import React from "react";
import './Modal.css';

const modal = (props) => {
    return (
        <div>
            
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h1>Your Order Has Been Submitted</h1>
                </div>
               
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
    
}

export default modal;
