/* eslint-disable import/no-duplicates */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { IconContext } from 'react-icons';
import { RiFacebookLine, RiLinkedinLine } from 'react-icons/ri';
import { CiTwitter } from 'react-icons/ci';

export const socialLink = [
    {
        id: 1,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#FFF',
                    size: 12,
                }}
            >
                <RiFacebookLine />
            </IconContext.Provider>
        ),
    },
    {
        id: 2,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#FFF',
                    size: 12,
                }}
            >
                <RiLinkedinLine />
            </IconContext.Provider>
        ),
        orange: true,
    },
    {
        id: 3,
        icon: (
            <IconContext.Provider
                value={{
                    color: '#FFF',
                    size: 12,
                }}
            >
                <CiTwitter />
            </IconContext.Provider>
        ),
    },
];
