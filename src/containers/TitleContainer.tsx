import {FC, PropsWithChildren} from 'react'

import usePageTitle from '@/hooks/usePageTitle'

type TitleProps = {
  title?: string
}

const TitleContainer: FC<PropsWithChildren<TitleProps>> = ({
  title,
  children,
}) => {
  usePageTitle(title)
  return <>{children}</>
}

export default TitleContainer
