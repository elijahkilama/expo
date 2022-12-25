/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { IconContext } from 'react-icons';
import { FaChartPie } from 'react-icons/fa';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { GiCash } from 'react-icons/gi';
import { RxCube } from 'react-icons/rx';

export const feature = [
    {
        id: 1,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#1D79FB',
                    size: '30px',
                }}
            >
                <FaChartPie />
            </IconContext.Provider>
        ),
        title: 'Supply Chain Analitics',
        desciption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Get Started',
        icon2: <EastRoundedIcon sx={{ color: '#1D79FB' }} />,
    },
    {
        id: 2,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#00B59C',
                    size: '30px',
                }}
            >
                <GiCash />
            </IconContext.Provider>
        ),
        title: 'Product Cost Management',
        desciption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Get Started',
        icon2: <EastRoundedIcon sx={{ color: '#1D79FB' }} />,
    },
    {
        id: 2,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#FF6C02',
                    size: '30px',
                }}
            >
                <RxCube />
            </IconContext.Provider>
        ),
        title: 'Supply Chain Monitoring',
        desciption:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        btn: 'Get Started',
        icon2: <EastRoundedIcon sx={{ color: '#1D79FB' }} />,
    },
];
