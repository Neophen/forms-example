import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    firstName: string,
    lastName: string,
    email: string,
    moreDetail: boolean,
    interests?: string,
};

import type { NextPage } from 'next';
import Container from '@mui/material/Container';

const Home: NextPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmitHandler: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));

    const onSubmit = handleSubmit(onSubmitHandler);

    const moreDetail = watch('moreDetail');
  return (
    <Container maxWidth="lg">
    <form onSubmit={onSubmit}>
    <div>
          <label htmlFor="firstName">First Name</label>
          <input placeholder="Bill" {...register('firstName')} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input placeholder="Luo" {...register('lastName')} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="bluebill1049@hotmail.com"
            type="email"
            {...register('email')}
          />
        </div>

        <div>
          <label htmlFor="lastName">More Details</label>
          <input type="checkbox" {...register('moreDetail')} />
        </div>

        {moreDetail && (
          <div>
            <label>Interests</label>
            <input type="text" {...register('interests')} />
          </div>
        )}
    </form>
    </Container>
  );
};

export default Home;
