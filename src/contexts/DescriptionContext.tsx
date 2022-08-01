import React, { useContext, useState } from 'react'

interface DescriptionContextType {
  description: string | null
  setDescription: (description: string) => void
}

const DescriptionContext = React.createContext<DescriptionContextType>({
  description: null,
  setDescription: () => {},
})

export function DescriptionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [description, setDescription] = useState<string | null>(null)

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
