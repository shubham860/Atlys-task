import Logo from '../assets/Logo.svg';
import Form from './Form';

export default function Login({setUi, setLoginModal, setOpenModal}) {
    return <div className="flex flex-col gap-[50px] items-center justify-center">
        <img src={Logo} height='40' width='40' alt='dummy-logo'/>
        <Form type='login' setUi={setUi} setOpenModal={setOpenModal} setLoginModal={setLoginModal} />
    </div>
 }