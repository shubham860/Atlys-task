import { commentsFormConfig } from "../helper"
import Dots from '../assets/Dots.svg';
import Chat from '../assets/Chat.svg';

export default function Comments({setLoginModal, setOpenModal}) {
    const { title = '', description = '', form, comments = [] } = commentsFormConfig;
    const { title: formTitle = '', icon = '', placeholder = '', submitBtnText = '' } = form || {};

    const onFormSubmit = () => {
        setLoginModal(true);
        setOpenModal(true);
    }

    return <div className="max-w-[700px] flex flex-col items-start gap-[40px] w-full mt-48">
        <div className="flex flex-col items-start gap-3 w-full">
            <p className="text-3xl text-[#C5C7CA] font-medium">{title}</p>
            <p className="text-[16px] text-[#7F8084]">{description}</p>
        </div>

        <div className="flex flex-col gap-4 w-full">
            <div className="border-[#35373B] border-2 px-5 py-6 rounded-lg w-full bg-[#35373B]">
                <p className="text-[#C5C7CA] font-medium text-[16px] mb-4">{formTitle}</p>
                <div className="flex gap-4 bg-[#191920] p-[15px] w-full rounded-lg">
                    <div className="h-12 w-12 rounded-full flex justify-center items-center bg-[#27292D] flex-shrink-0">
                        {icon}
                    </div>
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="h-[43px] w-full outline-none p-[12px] bg-inherit text-[#7F8084]"
                    />
                </div>
                <div className="flex justify-end">
                    <button onClick={onFormSubmit} className="cursor-pointer bg-[#4A96FF] text-white h-11 w-28 mt-4 rounded-[4px]">{submitBtnText}</button>
                </div>
            </div>

            {
                comments.map((comment, index) => {
                    const { username = '', time = '', avatar, description = '', icon = '', replies = 0 } = comment;
                    return <div className="border-[#35373B] border-2 px-5 py-6 rounded-lg w-full bg-[#35373B]" key={index}>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-4">
                                <img src={avatar} height={44} width={44} alt='avatar' />
                                <div className="flex flex-col text-sm font-medium">
                                    <p className="text-[#C5C7CA]">{username}</p>
                                    <p className="text-[#7F8084]">{time}</p>
                                </div>
                            </div>
                            <button onClick={onFormSubmit}><img src={Dots} height={20} width={20} alt="dots" /></button>
                        </div>
                        <div className="flex gap-4 bg-[#191920] p-[15px] w-full rounded-lg mt-5">
                            <div className="h-12 w-12 rounded-full flex justify-center items-center bg-[#27292D] flex-shrink-0">
                                {icon}
                            </div>
                            <p className="text-lg text-[#7F8084]">{description}</p>
                        </div>
                        <button className="flex mt-3 gap-2 cursor-pointer" onClick={onFormSubmit}>
                            <img src={Chat} height={20} width={20} alt='chat'/>
                            <span className='text-[#7F8084] text-sm'>{replies} {replies > 1 ? 'comments' : 'comment'}</span>
                        </button>
                    </div>
                })
            }

        </div>
    </div>
}