import {FC, PropsWithChildren, ReactNode} from 'react'
import SuspenseContainer from './SuspenContainer'
import TitleContainer from './TitleContainer'

type PageProps = {
  useLazy?: boolean
  title?: string
  customLoading?: ReactNode
}

const PageContainer: FC<PropsWithChildren<PageProps>> = ({
  useLazy = true,
  title,
  customLoading,
  children,
}) => {
  return (
    <SuspenseContainer useLazy={useLazy} loading={customLoading}>
      <TitleContainer title={title}>{children}</TitleContainer>
    </SuspenseContainer>
  )
}

export default PageContainer
