"use client"
import { CacheProvider } from "@emotion/react"
import { MantineProvider, useEmotionCache } from "@mantine/core"
import { useServerInsertedHTML } from "next/navigation"
import { FC, PropsWithChildren } from "react"

const Mantine: FC<PropsWithChildren> = ({ children }) => {
  const cache = useEmotionCache()
  cache.compat = true

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{
          colorScheme: "light",
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}

export default Mantine
