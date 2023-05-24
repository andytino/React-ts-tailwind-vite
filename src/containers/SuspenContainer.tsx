import {FC, PropsWithChildren, ReactNode, Suspense} from 'react'
import Loading from '@/components/Loading'

type SuspenseProps = {
  useLazy: boolean
  loading?: ReactNode
}

const SuspenseContainer: FC<PropsWithChildren<SuspenseProps>> = ({
  useLazy,
  loading,
  children,
}) => {
  return (
    <>
      {useLazy ? (
        <Suspense fallback={loading || <Loading />}>{children}</Suspense>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default SuspenseContainer
