export const getStoredTheme = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme')
    }
    return null
}

export const setStoredTheme = (theme: 'light' | 'dark' | 'auto'): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme)
    }
}

export const getPreferredTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') {
        return 'light' // Default theme for SSR
    }

    const storedTheme = getStoredTheme()
    if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const setTheme = (theme: 'light' | 'dark' | 'auto'): void => {
    if (typeof window === 'undefined') { return }

    const resolvedTheme =
        theme === 'auto'
            ? window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
            : theme

    document.documentElement.setAttribute('data-bs-theme', resolvedTheme)
}
