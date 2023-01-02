import { useModalDispatch } from 'context';

type Props = {};

export const ViewBoardModal = (props: Props) => {
  const dispatch = useModalDispatch();

  return (
    <form className='form' method='dialog'>
      <header>
        <h1>VIEW BOARD MODAL</h1>
        <button type='button' onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
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
  );
};
