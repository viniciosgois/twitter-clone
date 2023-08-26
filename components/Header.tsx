import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi';

type HeaderProps = {
  label: string;
  showBackArrow?: boolean;
};

function Header({ label, showBackArrow }: HeaderProps) {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className='border-b-[1px] border-neutral-800 p-5'>
      <div className='flex flex-row items-center gap-2'>
        {showBackArrow && (
          <BiArrowBack
            onClick={handleBack}
            color='white'
            size={20}
            className='cursor-pointer transition hover:opacity-70'
          />
        )}
        <h1 className='text-xl font-semibold text-white'>{label}</h1>
      </div>
    </div>
  );
}

export default Header;
