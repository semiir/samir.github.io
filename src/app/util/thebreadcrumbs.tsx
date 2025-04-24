"use client";

import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { generateBreadcrumbSegments } from "@/app/util/generateBreadcrumbSegments";

export default function TheBreadcrumbs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const breadcrumbs = pathname ? generateBreadcrumbSegments(pathname, searchParams ?? undefined) : [];

  return (
    <div className="mb-5 mt-2 w-full bg-white px-5 py-1 border rounded">
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  );
}