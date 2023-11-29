import {useState} from 'react';
import Cake from '../components/Cake';

const CakesContainer = () => {

    return (
        <>
            <h1>Cakes</h1>
            <Cake
                name={"Tea Loaf"}
                ingredients={["eggs", "oil", "dried fruit", "sugar", "sel-raising flour", "strong tea"]}
                rating={3}
                price={2}
            />
        </>
    )








}

export default CakesContainer;