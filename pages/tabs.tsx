
import * as React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface IFormInputs {
    firstName: string,
    lastName: string,
    email: string,
    moreDetail: boolean,
    moreDetailsStuff?: string,
    interests?: string,
};


const About: NextPage = () => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>();
    const onSubmitHandler: SubmitHandler<IFormInputs> = data => alert(JSON.stringify(data));

    const onSubmit = handleSubmit(onSubmitHandler);

    const moreDetail = watch('moreDetail');

    return (
        <Container maxWidth="lg">
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Step One" value="1" />
                        <Tab label="Step Two" value="2" />
                        {moreDetail && (<Tab label="Step Three" value="3" />)}
                        <Tab label="Submit" value="4" />
                    </TabList>
                </Box>


                {errors.interests && <p>interests are required</p>}
                <p>hey there</p>
                <form onSubmit={onSubmit}>
                    <TabPanel value="1">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input placeholder="Bill" {...register('firstName')} />
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input placeholder="Luo" {...register('lastName')} />
                        </div>
                    </TabPanel>




                    <TabPanel value="2">
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
                                <label>Dependant on More Details</label>
                                <input type="text" {...register('moreDetailsStuff', { required: true })} />
                            </div>
                        )}
                    </TabPanel>

                    {moreDetail && (<TabPanel value="3">
                        <div>
                            <label>Interests</label>
                            <input type="text" {...register('interests', { required: true })} />
                        </div>
                    </TabPanel>
                    )}

                    <TabPanel value="4">
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </TabPanel>


                </form>
            </TabContext>
        </Container>
    );
};

export default About;
