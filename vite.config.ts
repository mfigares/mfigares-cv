import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

const getLastCommitDate = () => {
  try {
    return execSync("git log -1 --format='%ad' --date=format:'%B %Y'")
      .toString()
      .trim()
      .replace(/'/g, '')
  } catch {
    return 'Unknown'
  }
}

export default defineConfig({
  plugins: [react()],
  base: '/mfigares-cv/',
  define: {
    __LAST_UPDATED__: JSON.stringify(getLastCommitDate()),
  },
})
