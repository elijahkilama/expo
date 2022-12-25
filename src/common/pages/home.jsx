/* eslint-disable react/react-in-jsx-scope */

import { Best } from '../components/home/best';
import { Client } from '../components/home/client';
import { Cover } from '../components/home/cover';
import { Feature } from '../components/home/feature';
import { Needs } from '../components/home/need';
import { Subscribe } from '../components/home/subscribe';
import { Visibilities } from '../components/home/visibility';

/* eslint-disable react/function-component-definition */
const Home = () => {
    return (
        <div>
            <Cover />
            <Feature />
            <Visibilities />
            <Best />
            <Needs />
            <Client />
            <Subscribe />
        </div>
    );
};

export default Home;
