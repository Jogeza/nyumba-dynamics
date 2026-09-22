import React from 'react';

const iconPaths: Record<string, React.ReactNode> = {
  electrical: <><path d="M13 2 5 14h6l-1 8 8-12h-6l1-8Z" /></>,
  plumbing: <><path d="M7 3v5a5 5 0 0 0 10 0V3" /><path d="M5 3h4M15 3h4M12 13v8M8 21h8" /></>,
  masonry: <><path d="M3 5h18v14H3zM3 10h18M3 15h18M8 5v5M16 5v5M6 10v5M14 10v5M9 15v4M17 15v4" /></>,
  carpentry: <><path d="m14 4 6 6-9 9H5v-6l9-9Z" /><path d="m12 6 6 6M3 21h18" /></>,
  welding: <><path d="M12 3c2 3 4 4.8 4 8a4 4 0 0 1-8 0c0-2.2 1.1-4.2 4-8Z" /><path d="M5 18h14M7 21h10" /></>,
  painting: <><path d="M4 5h11v5H4zM15 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6" /><path d="M12 12v9" /></>,
  cctv: <><path d="M4 7h12l4 4-4 4H4z" /><path d="M8 15v4M5 21h6" /><circle cx="15" cy="11" r="1" /></>,
  security: <><path d="M12 3 4 6v5c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  smart: <><path d="M3 11 12 3l9 8M5 10v10h14V10" /><path d="M9 15a4 4 0 0 1 6 0M11 17a1.5 1.5 0 0 1 2 0" /></>,
  cleaning: <><path d="m15 4 5 5-8 11H5l10-16Z" /><path d="M4 20h16M6 15h8" /></>,
  landscape: <><path d="M12 21v-9" /><path d="M12 14C7 14 4 11 4 6c5 0 8 3 8 8ZM12 17c5 0 8-3 8-8-5 0-8 3-8 8Z" /></>,
  interior: <><path d="M4 20V8l8-5 8 5v12" /><path d="M8 20v-7h8v7M3 20h18" /></>,
  pest: <><path d="M8 9a4 4 0 0 1 8 0v7a4 4 0 0 1-8 0V9Z" /><path d="M12 5V2M8 11H4M20 11h-4M7 15l-4 2M17 15l4 2" /></>,
  air: <><circle cx="12" cy="12" r="2" /><path d="M12 10c-1-4 1-7 4-7 2 3 1 6-2 8M14 13c4 1 5 4 3 7-4 0-6-2-5-6M10 13c-3 3-6 2-7-1 2-3 5-4 8-1" /></>,
  baby: <><circle cx="12" cy="8" r="3" /><path d="M6 21a6 6 0 0 1 12 0M9 8c1-2 3-3 5-3" /></>,
  locksmith: <><circle cx="9" cy="12" r="5" /><path d="m13 12 8 0M18 12v3M21 12v2" /></>,
  appliance: <><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="14" r="4" /><path d="M8 7h.01M11 7h4" /></>,
  preventive: <><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" /><path d="M9 12h6M12 9v6" /></>,
  safety: <><path d="M12 3 3 20h18L12 3Z" /><path d="M12 9v5M12 17h.01" /></>,
  swimming: <><path d="M3 16c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 2-1M3 20c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 2-1" /><path d="M8 15V7a3 3 0 0 1 6 0M8 10h6" /></>,
  roof: <><path d="m3 12 9-8 9 8M5 10v10h14V10" /><path d="M8 15h8" /></>,
  default: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8Z" /></>,
};

const pickIcon = (slug: string) => {
  const aliases: Record<string, string> = { 'smart-homes': 'smart', 'cleaning': 'cleaning', 'landscaping': 'landscape', 'air-conditioning': 'air' };
  const key = aliases[slug] || Object.keys(iconPaths).find((name) => slug.includes(name));
  return iconPaths[key || 'default'];
};

const ServiceLineIcon = ({ slug }: { slug: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {pickIcon(slug)}
  </svg>
);

export default ServiceLineIcon;
