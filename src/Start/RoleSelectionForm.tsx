import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import TextButton from '../design-components/buttons/TextButton';
import styles from './CustomRadio.module.css';
import { useEffect } from 'react';

interface RoleProps {
  role: string;
}

interface RoleSelectionProps {
  onRoleChange: (role: string) => void;
}

const RoleSelectionForm = ({ onRoleChange }: RoleSelectionProps) => {
  const { register, handleSubmit, watch } = useForm<RoleProps>({});

  const navigate = useNavigate();

  const roleSubmit = (data: RoleProps) => {
    console.log('chosen role', data)
    if (data.role === 'performer') {
      navigate('/performer-signup');
    } else if (data.role === 'planner') {
      navigate('/planner-signup');
    }
  };

  const roleValue = watch('role');

  useEffect(() => {
    if (roleValue) {
      onRoleChange(roleValue);
    }
  }, [roleValue, onRoleChange])

  return (
    <form
      className="w-1/2 flex flex-col justify-center items-center space-y-4 font-inter"
      onSubmit={handleSubmit(roleSubmit)}
    >
      <div className="role-selection-container">
        <h2 className="font-bold text-4xl text-text_primary">Get Started:</h2>
        <p className="text-secondary text-xl">Choose the role that best describes you to continue.</p>
        <div className="flex flex-col space-y-4">

          {/* Input options */}
          <div>

            {/* Option 1 */}
            <div className='relative'>
              <input
                type="radio"
                id='performer'
                value='performer'
                {...register('role')}
                className={`${styles.customRadio} peer absolute top-9 left-4 z-10 cursor-pointer`}
              />
              <label
                htmlFor="performer"
                className='flex items-center gap-3 p-2 pl-12 rounded-md border border-[#d8dadc]
                  cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-[#ffece0]
                  text-md text-secondary peer-checked:text-primary'
              >
                As a Performer
              </label>
            </div>

            {/* Option 2 */}
            <div className='relative'>
              <input
                type="radio"
                id='planner'
                value='planner'
                {...register('role')}
                className={`${styles.customRadio} peer absolute top-9 left-4 z-10 cursor-pointer`}
              />
              <label
                htmlFor="planner"
                className='flex items-center gap-3 p-2 pl-12 rounded-md border border-[#d8dadc]
                  cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-[#ffece0]
                  text-md text-secondary peer-checked:text-primary'
              >
                As a Client: Planning Events/Shopping for Performances
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white rounded-xl py-3 cursor-pointer text-md"
            style={{ backgroundColor: 'black' }}
          >
            Continue
          </button>
        </div>
        <div className="inline-flex space-x-2 text-lg mt-24">
          <p className='py-2.5'>Already have an account? </p>
          <TextButton
            buttonText='Login'
            textColor='primary'

          />
        </div>
      </div>
    </form>
  );
};

export default RoleSelectionForm;
