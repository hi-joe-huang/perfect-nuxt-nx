import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 結合 twMerge 與 clsx 功能，Shadcn 自帶工具函式
 * @url https://www.shadcn-vue.com/docs/cli.html
 */
export function cn(...inputs: ClassValue[] | any) {
  return twMerge(clsx(inputs))
}
