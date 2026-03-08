import React from 'react';
import {
    FaBook,
    FaPalette,
    FaHandsHelping,
    FaMicrophone,
    FaRunning,
    FaBullhorn,
    FaLeaf,
    FaHeartbeat,
    FaCogs,
    FaTheaterMasks
} from 'react-icons/fa';

export const activityData = [
    {
        id: 1,
        title: 'Academic Conclaves',
        icon: <FaBook />,
        desc: 'Regular intellectual gatherings and academic seminars featuring renowned resource persons to broaden students\' academic horizons.'
    },
    {
        id: 2,
        title: 'Arts & Cultural Fests',
        icon: <FaTheaterMasks />,
        desc: 'Annual intra-college and inter-college arts festivals that provide a grand stage for discovering and nurturing creative talents.'
    },
    {
        id: 3,
        title: 'Social Outreach',
        icon: <FaHandsHelping />,
        desc: 'Charity drives, community service projects, and relief efforts reflecting our deep commitment to societal welfare.'
    },
    {
        id: 4,
        title: 'Literary & Debating',
        icon: <FaMicrophone />,
        desc: 'Dynamic language clubs, debating societies, and content writing workshops aimed at honing critical thinking and public speaking.'
    },
    {
        id: 5,
        title: 'Sports & Athletics',
        icon: <FaRunning />,
        desc: 'Annual sports meets and inter-departmental tournaments that promote physical well-being, teamwork, and healthy competition.'
    },
    {
        id: 6,
        title: 'Media & IT Training',
        icon: <FaBullhorn />,
        desc: 'Hands-on training in graphic design, video editing, and IT skills, preparing students for the modern digital era.'
    },
    {
        id: 7,
        title: 'Environmental Projects',
        icon: <FaLeaf />,
        desc: 'Campus beautification and \'Green Campus\' campaigns led by our Garden Committee to promote sustainability.'
    },
    {
        id: 8,
        title: 'Health & Wellness',
        icon: <FaHeartbeat />,
        desc: 'Medical camps and health awareness seminars to ensure the physical and mental well-being of our student body.'
    }
];
