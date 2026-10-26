import { useEffect } from 'react';

export default function Page({ title, wide, children }) {
  useEffect(() => {
    document.title = title ? `${title} – Dean Wu` : 'Dean Wu';
  }, [title]);

  return <main className={wide ? 'page wide' : 'page'}>{children}</main>;
}
