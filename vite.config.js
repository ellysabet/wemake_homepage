import { defineConfig } from 'vite'
import react from '@vitejs/react'

export default defineConfig({
  plugins: [react()],
  base: '/wemake_homepage/', // 반드시 저장소 이름 앞뒤로 /를 붙여주세요!
})