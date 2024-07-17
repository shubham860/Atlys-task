import { formConfig } from '../helper';
import Eye from '../assets/Eye.svg';

export default function Form({ type, setUi, setLoginModal, setOpenModal }) {
    const { title = '', subTitle = '', submitBtnText = '', fields = [], metaText = '', linkText = '' } = formConfig[type];

    const onLinkClicked = (type) => {
        setLoginModal(type === 'signup');
        setOpenModal(true);
    }

    const onFormSubmit = () => {
        setOpenModal(false);
        setUi('comments');
    }

    return <div className='flex flex-col items-center bg-[#27292D] h-auto w-[463px] rounded-lg border-2 pt-10 px-6 pb-[40px]'>
        <div className='flex flex-col items-center gap-2 w-full'>
            <p className='text-sm font-medium text-[#6B6C70]'>{title}</p>
            <p className='text-lg font-semibold text-white'>{subTitle}</p>
        </div>

        <div className='flex flex-col gap-4 w-full mt-11'>
            {
                fields.map((field, index) => {
                    const { label = '', type = 'text', metaText = '', placeholder = '' } = field;
                    const isPasswordField = type === 'password';
                    const passwordFieldClasses = isPasswordField ? 'pr-[32px]' : '';
                    return <div className='flex flex-col gap-[10px] w-full' key={index}>
                        <div className='flex justify-between'>
                            <p className='text-sm font-medium text-[#C5C7CA] w-full'>{label}</p>
                            <p className='text-sm font-medium text-[#C5C7CA] w-full text-right cursor-pointer'>{metaText}</p>
                        </div>
                        <div className='flex relative'>
                            <input
                                type={type}
                                onChange={() => { }}
                                placeholder={placeholder}
                                className={`border border-[#35373B] rounded-[4px] h-[43px] w-full outline-none p-[12px] bg-inherit text-[#7F8084] ${passwordFieldClasses}`}
                            />
                            {
                                isPasswordField ? 
                                <img
                                    src={Eye}
                                    height={20}
                                    width={20}
                                    alt='eye'
                                    className='h-[20px] w-[20px] absolute right-[11px] top-1/4 cursor-pointer'
                                /> : ''
                            }
                        </div>
                    </div>
                })
            }
        </div>

        <button 
            className='flex items-center justify-center w-full mt-5 text-white text-center text-[16px] bg-[#4A96FF] rounded-[4px] h-[43px] font-medium'
            onClick={onFormSubmit}
        >
            {submitBtnText}
        </button>
        <div className='flex font-medium text-sm gap-1 mt-3 justify-start w-full'>
            <p className='text-[#7F8084]'>{metaText}</p>
            <button className='text-white cursor-pointer' onClick={() => onLinkClicked(type)}>{linkText}</button>
        </div>
    </div>
}