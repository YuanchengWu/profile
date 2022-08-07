import { createContext, ReactNode, useContext, useState } from 'react'
import { useIntl } from 'react-intl'

interface DescriptionContextType {
  description: string | null
  setDescription: (description: string) => void
}

const DescriptionContext = createContext<DescriptionContextType>({
  description: null,
  setDescription: () => {},
})

export function DescriptionProvider({ children }: { children: ReactNode }) {
  const intl = useIntl()
  const [description, setDescription] = useState<string>(
    intl.formatMessage({ id: 'description.default' })
  )

  return (
    <DescriptionContext.Provider value={{ description, setDescription }}>
      {children}
    </DescriptionContext.Provider>
  )
}

export function useDescription() {
  const { description, setDescription } = useContext(DescriptionContext)
  return { description, setDescription }
}
