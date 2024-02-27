import configConventional from '@commitlint/config-conventional'
import configPnpmScopes from '@commitlint/config-pnpm-scopes'
import merge from 'lodash.merge'
import type { RuleConfigCondition, RuleConfigSeverity } from '@commitlint/types'

type tRules = [RuleConfigSeverity, RuleConfigCondition, string[]]
interface tConfigPnpm { rules: { 'scope-enum': (ctx: any) => Promise<tRules> } }

const configPnpm = configPnpmScopes as tConfigPnpm

// zLabs | Black | Add `devops` to `types` for `configConventional`
configConventional.rules['type-enum'][2].unshift('devops')

configConventional.prompt.questions.type.enum = {
  devops: {
    description: 'Concerns DevOps',
    title: 'DevOps',
    emoji: '🚧',
  },
  ...configConventional.prompt.questions.type.enum,
} as typeof configConventional.prompt.questions.type.enum

// zLabs | Black | Add `root` to `scopes` for `configPnpmScopes`
const config = {
  rules: {
    'scope-enum': async (ctx: any) => {
      const scopesPlusRoot: tRules = await configPnpm.rules['scope-enum'](ctx) as tRules
      // DODO (2024-03-09 05:17): zLabs | Black
      //                          #1 upgrade: Fetch name of root package
      //                          #2 upgrade: Own `@mbr/commitlint-config`
      //                          #3 upgrade: Scope-Sub - selectable sub-scopes per package
      //                          Quite hard to understand there's no current solution to this rather obvious and simple requirement ...
      scopesPlusRoot[2].unshift('root')
      return scopesPlusRoot
    },
  },
}

export default merge(configConventional, config)
