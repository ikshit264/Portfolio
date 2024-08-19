import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { MyComputerProp } from '@/Types/Interfaces';
import Content from '../Tabs/Content';
import Linkedin from '@/../public/Linkedin.png'
import GitHub from '@/../public/GitHub.png'
import InstaGram from '@/../public/Instagram.png'
import Codechef from '@/../public/codechef.png'
import codeforces from '@/../public/codeforces.png'
import Leetcode from '@/../public/leetcode.png'
import GetSiteCount from './GetSiteCount';

const MySocials: MyComputerProp = {
    title: 'My Socials',
    socials: [
        {
            Description: "Get my Linkedin",
            image: Linkedin,
            link: 'https://www.linkedin.com/in/ikshit-talera-ab137725a/'
        },
        {
            Description: "Get my Github",
            image: GitHub,
            link: 'https://github.com/ikshit264'
        },
        {
            Description: "Get my Instagram",
            image: InstaGram,
            link: 'https://www.instagram.com/ikshit_04/'
        }
    ]
};

const MyCompetative: MyComputerProp = {
    title: 'My Competative',
    socials: [
        {
            Description: "Get my Leetcode",
            image: Leetcode,
            link: 'https://leetcode.com/u/ikshit_04/'
        },
        {
            Description: "Get my Codechef",
            image: Codechef,
            link: 'https://www.codechef.com/users/ikshit_04'
        },
        {
            Description: "Get my Codeforces",
            image: codeforces,
            link: 'https://codeforces.com/profile/ikshit_04'
        }
    ]
};

const MyContent = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className=' '>
                <Content socials={MySocials.socials} title={MySocials.title} />
            </div>
            <div className=' '>
                <Content socials={MyCompetative.socials} title={MyCompetative.title} />
            </div>
            <div className=' '>
                <GetSiteCount/>
            </div>
        </div>
    )
}

export default MyContent;
