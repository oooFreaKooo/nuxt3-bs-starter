export const usePage = () => {
    const pageData = ref<PageData | null>(null)
    const isLoading = ref(false)
    const error = ref<string | null>(null)

    const getPageData = async () => {
        isLoading.value = true
        error.value = null
        try {
            const { data } = await useFetch<PageData>('/api/page-data')
            pageData.value = data.value
            return { data: pageData }
        } catch {
            error.value = 'Failed to fetch page data'
            return { data: ref<PageData | null>(null) }
        } finally {
            isLoading.value = false
        }
    }

    return {
        pageData,
        isLoading,
        error,
        getPageData,
    }
}
