import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Box p={4}>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={4}>
        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input id="username" placeholder="Username" {...register('username')} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" type="password" placeholder="Password" {...register('password')} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="blue">Register</Button>
      </VStack>
    </Box>
  );
};

export default Register;