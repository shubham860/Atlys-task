import { useState } from "react";
import Form from "./components/Form";
import Login from "./components/Login";
import Modal from "./components/Modal";
import Comments from "./components/Comments";

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const [loginModal, setLoginModal] = useState(true);
  const [ui, setUi] = useState('login');
  const commonSetters = { setOpenModal, setLoginModal };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      {
        ui === 'login' ? <Login setUi={setUi} {...commonSetters} /> :
          <Comments {...commonSetters} />
      }

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Form type={loginModal ? 'login' : 'signup'} {...commonSetters} />
      </Modal>
    </div>
  )
}