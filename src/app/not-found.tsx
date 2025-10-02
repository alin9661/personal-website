export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>404 - Page Not Found</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.25rem' }}>Page not found</p>
          </div>
        </div>
      </body>
    </html>
  );
}