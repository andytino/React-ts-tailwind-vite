import {useEffect} from 'react'

export default function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title || import.meta.env.VITE_APP_TITLE
  }, [title])
}
