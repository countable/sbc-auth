import Axios from 'axios'
import { SessionStorageKeys } from './constants'

/**
 * the configs are used since process.env doesnt play well when we hae only one build config and multiple deployments..so going for this
 */
const url = `/${process.env.VUE_APP_PATH}/config/configuration.json`
const KEYCLOAK_TOKEN_SESSION_KEY = 'KEYCLOAK_TOKEN'

export default class ConfigHelper {
  static async fetchConfig () {
    const response = await Axios.get(url)
    sessionStorage.setItem(SessionStorageKeys.ApiConfigKey, JSON.stringify(response.data))
  }

  /**
 * this will run everytime when vue is being loaded..so do the call only when session storage doesnt have the values
 */
  static saveConfigToSessionStorage () {
    if (sessionStorage.getItem(SessionStorageKeys.ApiConfigKey)) {
      return Promise.resolve()
    } else {
      return this.fetchConfig()
    }
  }

  static getCoopsURL () {
    // this needs trailing slash
    return `${window.location.origin}/${process.env.VUE_APP_PATH_COOPS}/`
  }

  static getSelfURL () {
    // this is without a trailing slash
    return `${window.location.origin}/${process.env.VUE_APP_PATH}`
  }

  static getAuthAPIUrl () {
    return ConfigHelper.getValue('VUE_APP_AUTH_ROOT_API')
  }

  static getValue (key: String) {
    // @ts-ignore
    return JSON.parse(sessionStorage.getItem(SessionStorageKeys.ApiConfigKey))[key]
  }

  static addToSession (key:string, value:any) {
    sessionStorage.setItem(key, value)
  }

  static getFromSession (key:string):string {
    return sessionStorage.getItem(key)
  }

  static removeFromSession (key:string) {
    sessionStorage.removeItem(key)
  }

  static clearSession () {
    sessionStorage.clear()
  }
}
