import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormSchemaType } from '../validations/hero';

type Props = {
  handleMutate: (values: any) => void;
};

const FormSubmission = ({ handleMutate }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { isDirty, isValid, isSubmitting, errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async data => {
    await handleMutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex flex-col justify-center items-center'}>
        <div className={'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'}>
          <div className={'mb-2'}>
            <input
              className={'field'}
              id={'firstName'}
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className={'text-red-500 text-xs italic'}>
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className={'mb-20'}>
            <input
              className={'field'}
              id={'lastName'}
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className={'text-red-500 text-xs italic'}>
                {errors.lastName?.message}
              </p>
            )}
          </div>
          <div className={'mb-20'}>
            <input className={'field'} id={'house'} {...register('house')} />
            {errors.house && (
              <p className={'text-red-500 text-xs italic'}>
                {errors.house?.message}
              </p>
            )}
          </div>
          <div className={'mb-20'}>
            <input
              className={'field'}
              id={'knownAs'}
              {...register('knownAs')}
            />
            {errors.knownAs && (
              <p className={'text-red-500 text-xs italic'}>
                {errors.knownAs?.message}
              </p>
            )}
          </div>
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
