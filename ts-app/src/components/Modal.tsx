import React, { FC, useCallback, useRef } from 'react'

type ModalProps = {
    /**
     * 隐藏或者显示
     */
    visible?: boolean;
    onClose?: () => void;
}


export const Modal: FC<ModalProps> = (props) => {
    const {
        visible = false,
        onClose
    } = props
    const bodyRef = useRef<HTMLDivElement>(null)

    const hideModal = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const clickEle = e.target as HTMLDivElement
        
        if (bodyRef.current) {
            if (clickEle.contains(bodyRef.current)) {
                onClose && onClose()
            }
        }
    }, [onClose])

    

    
    return (
        <div className="modal" ref={bodyRef} style={{ display: visible ? 'flex' : 'none' }} onClick={hideModal}>
            <div className="modal-body">{props.children}</div>
        </div>
    )
}