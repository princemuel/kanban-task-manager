import { useModalStore } from 'context';
import { BaseModal } from './base-modal';

type Props = {};

export const AddBoardModal = (props: Props) => {
  const [isActive, setIsActive] = useModalStore(
    (state) => state['isModalOpen']
  );

  return (
    <BaseModal
      open={isActive}
      handleCloseModal={() => setIsActive({ isModalOpen: false })}
    >
      <form className='form' method='dialog'>
        <header>
          <h1>ADD BOARD MODAL</h1>
          <button
            type='button'
            onClick={() => setIsActive({ isModalOpen: false })}
          >
            Close
          </button>
        </header>
        <label htmlFor='name'>Your name</label>
        <input type='text' name='name' id='name' />
        <label htmlFor='email'>Your email</label>
        <input type='email' name='email' id='email' />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button type='submit'>Submit</button>
      </form>
    </BaseModal>
  );
};
