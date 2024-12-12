export { }

declare global {
    interface MenuItem {
        text: string
        href: string
    }

    interface Benefit {
        icon: BootstrapIcons
        title: string
        description: string
    }

    interface Service {
        title: string
        items: string[]
    }

    interface PageData {
        menuItems: MenuItem[]
        benefits: Benefit[]
        services: Service[]
        legalItems: string[]
    }

    type IconAnimationType = 'pulse' | 'spin' | 'bounce'
    type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'white' | 'black'
}
