import React from 'react'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../redux/reducer/home.reducer';

const Home = () => {
    const home = useSelector((state: { home: { name: "" } }) => state.home);
    const dispatch = useDispatch();

    const updateTxtHandler = () => {
        dispatch(changeName("Updated Name"))
    }

    return (
        <>
            <div>{home.name}</div>
            <Button color="primary" variant='contained' onClick={updateTxtHandler}>Update Text</Button>
        </>
    )
}

export default Home;
