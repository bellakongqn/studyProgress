import React, { useMemo } from 'react';
import PropTypes from 'prop-types'
import './Modal.css'

function Modal({ width, title, onCancle, onConfirm, footer, children, show, maskClosable}){

    const node = useMemo(() => {
        return (
            <div className="modal-mask" onClick={maskClosable?()=>onCancle():''}>
                <div className="modal-main" style={{width:width}}>
                    <div className="modal-header">
                        <span>{title}</span>
                        <span onClick={()=>onCancle()}>X</span>
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                    {
                        footer && 
                        <div className="modal-footer">
                            <button onClick={()=>onConfirm()}>确定</button>
                            <button onClick={()=>onCancle()}>取消</button>
                        </div>
                    }
                </div>
            </div>
    
        )
    }, [width, onCancle, children, onConfirm, title, footer,maskClosable])


    return(
        <>
            { show && node}
        </>
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    width: PropTypes.string,
    onCancle: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    footer:PropTypes.bool,
    show:PropTypes.bool.isRequired,
    maskClosable:PropTypes.bool,
    children:PropTypes.element.isRequired,
}

Modal.defaultProps = {
    width: '50%',
    footer:true,
    maskClosable:true,
}

export default Modal