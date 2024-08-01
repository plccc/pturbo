import CryptoJS from 'crypto-js'

export class CryptoHelper {
  static SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string

  static hmacSHA256(data: string): string {
    return CryptoJS.HmacSHA256(data, CryptoHelper.SECRET_KEY).toString()
  }
}
