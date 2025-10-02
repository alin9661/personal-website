'use client';

export const dynamic = 'force-dynamic';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Something went wrong</h1>
        <button
          onClick={() => reset()}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}