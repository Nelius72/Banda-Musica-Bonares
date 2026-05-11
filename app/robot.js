export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',       // Bloquea el acceso a carpetas de administración
        '/private',     // Bloquea contenido privado de los músicos
        '/api',         // Evita que Google indexe tus rutas de API internas
      ],
    },
    sitemap: 'https://bandamusicabonares.com/sitemap.xml',
  }
}