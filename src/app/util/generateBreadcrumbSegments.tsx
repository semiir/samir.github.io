import { ReadonlyURLSearchParams } from 'next/navigation';

export function generateBreadcrumbSegments(pathname: string, searchParams?: ReadonlyURLSearchParams) {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: searchParams ? `${href}?${searchParams.toString()}` : href,
    };
  });

  return breadcrumbs;
}