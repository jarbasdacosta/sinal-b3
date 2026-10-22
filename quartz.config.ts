import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ondaleta",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "pt-BR",
    baseUrl: "jarbasdacosta.github.io/sinal-b3",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Sora",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F7FAF9",
          lightgray: "#E3ECEA",
          gray: "#A9BDBA",
          darkgray: "#3E5A60",
          dark: "#0B2A33",
          secondary: "#0E7F76",
          tertiary: "#C98A2B",
          highlight: "rgba(25, 179, 166, 0.10)",
          textHighlight: "#F4B86088",
        },
        darkMode: {
          light: "#0B2A33",
          lightgray: "#12363F",
          gray: "#2A5059",
          darkgray: "#A9C2C0",
          dark: "#E6EFEE",
          secondary: "#19B3A6",
          tertiary: "#F4B860",
          highlight: "rgba(25, 179, 166, 0.12)",
          textHighlight: "#F4B86066",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-dark", dark: "github-dark" }, keepBackground: false }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}
export default config
