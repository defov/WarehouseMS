import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8090/graphql",
  documents: "./src/graphql/*.{ts,tsx}",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: [],
      // config: { withHooks: true },
    },
  },
}

export default config
