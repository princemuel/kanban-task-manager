import { ModalType, useModalStore } from 'context';
import { BaseModal } from './base-modal';

type Props = {
  name: ModalType;
};

export const ViewBoardModal = (props: Props) => {
  const [, setIsActive] = useModalStore((state) => state['isModalOpen']);

  return (
    <BaseModal
      // open={isActive && props?.name === 'ViewBoard'}
      name={'ViewBoard'}
      handleCloseModal={() => setIsActive({ isModalOpen: false })}
    >
      <form className='form' method='dialog'>
        <h1>VIEW BOARD MODAL</h1>
        {/* <header>
        <h2>An interesting title</h2>
        <button type='button' className='' onClick={closeModal}>
          Close modal
        </button>
      </header>
      <label htmlFor='name'>Your name</label>
      <input type='text' name='name' id='name' />
      <label htmlFor='email'>Your email</label>
      <input type='email' name='email' id='email' />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <button type='submit'>Submit</button> */}
        <button onClick={() => setIsActive({ isModalOpen: false })}>
          Close
        </button>
      </form>
    </BaseModal>
  );
};
