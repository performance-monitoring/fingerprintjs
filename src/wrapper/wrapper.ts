import { MiddleFunction } from '../types/middleware'
export class Wrapper {
  private plugins: MiddleFunction[]
  constructor () {
    this.plugins = []
  }

  register(plugins: MiddleFunction[]) {
    this.plugins.push(...plugins)
  }

  md5(): string {
    return ''
  }
}