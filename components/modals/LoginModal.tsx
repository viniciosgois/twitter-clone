import { useCallback, useState } from 'react';

import useLoginModal from '@/hooks/useLoginModal';
import Input from '../Input';
import Modal from '../Modal';
import useRegisterModal from '@/hooks/useRegisterModal';

function LoginModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) return;

    registerModal.onOpen();
    loginModal.onClose();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(() => {
    try {
      setIsLoading(true);

      // TODO ADD LOG IN

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className='mt-4 text-center text-neutral-400'>
      <p>
        First time using Twitter?
        <span
          onClick={onToggle}
          className='cursor-pointer text-white hover:underline'
        >
          {' '}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={loginModal.isOpen}
        title='Login'
        actionLabel='Sign in'
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
}

export default LoginModal;
