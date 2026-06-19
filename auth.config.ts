import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/', // Tu página de login raíz
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirige automáticamente a la página de signIn configurada arriba
      }
      return true;
    },
  },
  providers: [], // Se dejan vacíos aquí deliberadamente
} satisfies NextAuthConfig;
