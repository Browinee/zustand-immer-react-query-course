import { Alert, Box, Input } from '@mantine/core';
import React from 'react';

type Props = {
  label: string;
  type?: string;
  name?: string;
  errors: any;
};

const InputBox = ({ label, errors, type = 'text', ...props }: Props) => {
  return (
    <Box mb={20}>
      <Input type={type} {...props} />
      {errors[label] && <Alert color={'red'}>{errors[label]?.message}</Alert>}
    </Box>
  );
};

export default InputBox;
