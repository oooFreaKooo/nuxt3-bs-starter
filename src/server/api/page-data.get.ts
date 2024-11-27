import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
    return {
        menuItems: [
            { text: 'About', href: '#' },
            { text: 'References', href: '#' },
            { text: 'Machines', href: '#' },
            { text: 'Contact', href: '#' },
        ],
        benefits: [
            {
                icon: 'check-circle',
                title: 'Benefit 01',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            },
            {
                icon: 'star',
                title: 'Benefit 02',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            },
            {
                icon: 'shield',
                title: 'Benefit 03',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
            },
        ],
        services: [
            {
                title: 'Machines and Equipment',
                items: [
                    'CNC-Development',
                    'Specialized Businesses',
                    'Welding Technology',
                ],
            },
            {
                title: 'Service and Administration',
                items: [
                    'Assembly Work',
                    'Project Management',
                    'Quality Assurance',
                ],
            },
        ],
        legalItems: [
            'Impressum',
            'Privacy Policy',
            'Terms of Service',
        ],
    }
})
