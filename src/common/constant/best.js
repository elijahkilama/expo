/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { SiSimpleanalytics } from 'react-icons/si';
import { RxRocket } from 'react-icons/rx';
import { AiOutlineGift } from 'react-icons/ai';
import { RiTerminalWindowLine } from 'react-icons/ri';
import { MdOutlinePrivacyTip, MdSupportAgent } from 'react-icons/md';
import { IconContext } from 'react-icons';

export const best = [
    {
        id: 1,
        icon: (
            <IconContext.Provider value={{ color: 'red' }}>
                <RxRocket />
            </IconContext.Provider>
        ),
        bg: '#FFEFF2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        title: 'Faster Shipping',
    },
    {
        id: 2,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#CD58FF',
                }}
            >
                <SiSimpleanalytics />
            </IconContext.Provider>
        ),
        bg: '#F7E3FF',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        title: 'Real-Time Analytics',
    },
    {
        id: 3,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#FE8A01',
                }}
            >
                <AiOutlineGift />
            </IconContext.Provider>
        ),
        bg: '#FFF8E2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        title: 'Customer Parkaging',
    },
    {
        id: 4,
        bg: '#ECF7FF',
        icon: (
            <IconContext.Provider
                value={{
                    color: '#19A2FF',
                }}
            >
                <RiTerminalWindowLine />
            </IconContext.Provider>
        ),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        title: 'Automated Fullfillment',
    },
    {
        id: 5,
        bg: '#E4FDEE',
        icon: (
            <IconContext.Provider
                value={{
                    color: '#89F6AA',
                }}
            >
                <MdOutlinePrivacyTip />
            </IconContext.Provider>
        ),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        title: 'Private Labeling',
    },
    {
        id: 6,
        bg: '#FFF0ED',
        icon: (
            <IconContext.Provider
                value={{
                    color: '#FE7D8A',
                }}
            >
                <MdSupportAgent />
            </IconContext.Provider>
        ),
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        title: 'World Class Support',
    },
];
