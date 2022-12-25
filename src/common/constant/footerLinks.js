/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { GoLocation } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { SiExpo } from 'react-icons/si';
import { TiLocationArrow } from 'react-icons/ti';
import { BsFillTelephoneFill } from 'react-icons/bs';

export const footerLink = [
    {
        id: 1,
        name: 'xport',
        icon: (
            <IconContext.Provider
                value={{
                    color: '#06B79E',
                }}
            >
                <SiExpo />
            </IconContext.Provider>
        ),
        items: [
            {
                title: '123 Capital plot, RNC,street house ,rond BDGL, Goma ,DRC',
                icon: (
                    <IconContext.Provider
                        value={{
                            color: '#06B79E',
                        }}
                    >
                        <GoLocation />
                    </IconContext.Provider>
                ),
            },
            {
                title: 'Support',
                email: 'info@export.com',
                icon: (
                    <IconContext.Provider
                        value={{
                            color: '#06B79E',
                        }}
                    >
                        <TiLocationArrow />
                    </IconContext.Provider>
                ),
            },
            {
                title: 'Hotline',
                address: '+243 999 999 000',
                icon: (
                    <IconContext.Provider
                        value={{
                            color: '#06B79E',
                        }}
                    >
                        <BsFillTelephoneFill />
                    </IconContext.Provider>
                ),
            },
        ],
    },
    {
        id: 2,
        name: 'Quick Links',
        icon: null,
        items: [
            {
                title: 'Home',
            },
            {
                title: 'Services',
            },

            {
                title: 'Contact',
            },

            {
                title: 'Client Support',
            },
        ],
    },
    {
        id: 3,
        name: 'About us',
        icon: null,
        items: [
            {
                title: 'Disclaimer',
                icon: null,
            },
            {
                title: 'Privacy Policy',
                icon: null,
            },
            {
                title: 'Terms of service',
                icon: null,
            },
            {
                title: 'Carrier',
                icon: null,
            },
        ],
    },
];
