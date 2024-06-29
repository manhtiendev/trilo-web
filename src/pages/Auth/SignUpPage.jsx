import useToggleValue from '~/hooks/useToggleValue';
import LayoutAuthentication from '~/layout/LayoutAuthentication';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, ButtonGoogle } from '~/components/button';
import { Input } from '~/components/input';
import { IconEyeToggle } from '~/components/icons';
import { FormGroup } from '~/components/common';
import { Checkbox } from '~/components/checkbox';
import { Label } from '~/components/label';
// import { useDispatch } from 'react-redux';
// import { authRegister } from 'store/auth/auth-slice';

const schema = yup.object({
  name: yup.string().required('This field is required'),
  email: yup.string().email('Invalid email address').required('This field is required'),
  password: yup.string().required('This field is required').min(8, 'Password must be 8 character'),
  passwordConfirmation: yup
    .string()
    .required('This field is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUpPage = () => {
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } = useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  // const dispatch = useDispatch();

  const handleSignUp = async (values) => {
    // dispatch(authRegister({ ...values, permissions: [] }));
    console.log(values);
    reset({
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    });
  };

  return (
    <LayoutAuthentication heading='Sign Up'>
      <p className='mb-6 text-xs font-normal text-center lg:mb-8 lg:text-sm text-text3'>
        Already have an account?{' '}
        <Link to='/login' className='font-medium underline text-primary'>
          Sign in
        </Link>
      </p>
      <ButtonGoogle></ButtonGoogle>
      <p className='mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white'>
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor='name'>Full Name *</Label>
          <Input
            control={control}
            name='name'
            placeholder={'Jhon Doe'}
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>Email *</Label>
          <Input
            control={control}
            type='email'
            name='email'
            placeholder='example@gmail.com'
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup htmlFor='password'>
          <Label>Password *</Label>
          <Input
            control={control}
            type={`${showPassword ? 'text' : 'password'}`}
            name='password'
            placeholder='Create a password'
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup htmlFor='passwordConfirmation'>
          <Label>Password *</Label>
          <Input
            control={control}
            type={`${showPassword ? 'text' : 'password'}`}
            name='passwordConfirmation'
            placeholder='Confirm password'
            error={errors.passwordConfirmation?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className='mb-5'>
          <Checkbox name='term' checked={acceptTerm} onClick={handleToggleTerm}>
            <p className='flex-1 text-sx lg:text-sm text-text2 dark:text-text3'>
              I agree to the <span className='underline text-secondary'>Terms of Use</span> and have
              read and understand the{' '}
              <span className='underline text-secondary'>Privacy policy</span>.
            </p>
          </Checkbox>
        </div>
        <Button kind='primary' type='submit' className='w-full'>
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
