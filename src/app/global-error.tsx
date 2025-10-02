'use client';

export default function GlobalError() {
  return (
    <html lang="en">
      <head>
        <title>500 - Server Error</title>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>500</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Something went wrong!</p>
            <a
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#3b82f6',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '0.25rem',
                fontSize: '1rem'
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}