import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';

const schema = yup.object().shape({
  phoneNumber: yup.string().required('Phone number is required'),
  verificationCode: yup.string().required('Verification code is required'),
});

const PhoneVerification = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Box p={4}>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
        <FormControl isInvalid={errors.phoneNumber}>
          <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
          <Input id="phoneNumber" placeholder="Phone Number" {...register('phoneNumber')} />
          <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.verificationCode}>
          <FormLabel htmlFor="verificationCode">Verification Code</FormLabel>
          <Input id="verificationCode" placeholder="Verification Code" {...register('verificationCode')} />
          <FormErrorMessage>{errors.verificationCode?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue">Verify</Button>
      </VStack>
    </Box>
  );
};

export default PhoneVerification;