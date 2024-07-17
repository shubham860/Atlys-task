import { useEffect } from 'react'
import CloseIcon from '../assets/Cross.svg';

export default function Modal({ children, open, onClose, className = '' }) {

    useEffect(() => {
        if (open) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [open])

    return open && <div className={`flex justify-center items-center ${className}`}>
        <div className='h-screen w-screen duration-1000 backdrop-brightness-50 fixed top-0 left-0 z-40 cursor-pointer' onClick={onClose} />
        <div className='h-auto w-auto fixed top-[calc(100vh-75%)] overflow-hidden z-50'>
            <button  onClick={onClose} className='absolute top-7 right-4 h-8 w-8 bg-[#131319] rounded-full p-2 flex justify-center items-center'>
                <img src={CloseIcon} width={16} height={16} alt='close' />
            </button>
            {children}
        </div>
    </div>
}