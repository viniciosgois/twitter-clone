interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ onChange, disabled, placeholder, type, value }: InputProps) {
  return (
    <input
      disabled={disabled}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      className='
      w-full
      rounded-md
      border-2
      border-neutral-800
      bg-black
      p-4
      text-lg
      text-white
      outline-none
      transition
      focus:border-sky-500
      disabled:cursor-not-allowed
      disabled:bg-neutral-900
      disabled:opacity-70
      '
    />
  );
}

export default Input;
