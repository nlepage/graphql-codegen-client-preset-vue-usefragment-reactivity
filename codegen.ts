import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['front/src/**/*.vue'],
  generates: {
    './front/src/gql/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
    }
  }
}
 
export default config