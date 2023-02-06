import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { HeroFormSchema, HeroFormSchemaType } from '../validations/hero';
import InputBox from './InputBox';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  handleMutate: (values: any) => Promise<void>;
};

const FormSubmission = ({ handleMutate }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm<HeroFormSchemaType>({
    resolver: zodResolver(HeroFormSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<HeroFormSchemaType> = async data => {
    try {
      await handleMutate(data);
      reset();
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex flex-col items-center justify-center'}>
        <div className={'card'}>
          {/* <div className={'mb-5 flex flex-col'}>
            <label htmlFor={'firstName'}>First Name</label>
            <input
              className={'field'}
              id={'firstName'}
              {...register('firstName')}
            />
            <ErrorMessage
              errors={errors}
              name="firstName"
              render={e => (
                <pre className="text-xs italic text-red-500">{e.message}</pre>
              )}
            />
          </div> */}
          <InputBox
            label="First Name"
            errors={errors}
            name="firstName"
            register={register}
          />
          <InputBox
            label="Last Name"
            errors={errors}
            name="lastName"
            register={register}
          />
          <InputBox
            label="House"
            errors={errors}
            name="house"
            register={register}
          />
          <InputBox
            label="Known As"
            errors={errors}
            name="knownAs"
            register={register}
          />
          <button
            disabled={!isValid}
            type="submit"
            className={'btn btn--primary'}
          >
            {isSubmitting ? 'submitting..' : 'Save Character'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSubmission;
