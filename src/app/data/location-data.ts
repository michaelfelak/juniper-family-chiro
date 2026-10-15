export type LocationSlug = 'greenville' | 'north-augusta';

export interface LocationDetails {
  slug: LocationSlug;
  name: string;
  city: string;
  state: 'SC';
  postalCode: string;
  streetAddress: string;
  doctorName: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneStructured: string;
  directionsUrl: string;
  pageTitle: string;
  h1: string;
  description: string;
  introduction: string;
  bookingUrl: string;
}

export const SITE_URL = 'https://juniperfamilychiro.com';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const LOCATION_DETAILS: Readonly<Record<LocationSlug, LocationDetails>> = {
  greenville: {
    slug: 'greenville',
    name: 'Greenville',
    city: 'Greenville',
    state: 'SC',
    postalCode: '29615',
    streetAddress: '319 Garlington Road, Unit D1',
    doctorName: 'Dr. Haven Wood',
    phoneDisplay: '864.977.8600',
    phoneHref: 'tel:8649778600',
    phoneStructured: '+1-864-977-8600',
    directionsUrl: 'https://maps.app.goo.gl/txQeSZfjUznr4Zxk6',
    pageTitle: 'Greenville SC Chiropractor | Pregnancy & Pediatric Care | Juniper',
    h1: 'Pregnancy & Pediatric Chiropractor in Greenville, SC',
    description:
      'Visit Juniper Family Chiropractic in Greenville, SC for pregnancy and pediatric chiropractic care. Find our address, directions, and booking information.',
    introduction:
      'Dr. Haven Wood provides pregnancy and pediatric chiropractic care at Juniper Family Chiropractic in Greenville, on Garlington Road. Call our office for help planning your visit or finding directions.',
    bookingUrl: 'https://juniperfamilychiro.janeapp.com',
  },
  'north-augusta': {
    slug: 'north-augusta',
    name: 'North Augusta',
    city: 'North Augusta',
    state: 'SC',
    postalCode: '29841',
    streetAddress: '420 West Ave',
    doctorName: 'Dr. Ashley Felak',
    phoneDisplay: '803.471.7008',
    phoneHref: 'tel:8034717008',
    phoneStructured: '+1-803-471-7008',
    directionsUrl: 'https://maps.google.com/?q=420+West+Avenue,+North+Augusta,+SC+29841',
    pageTitle: 'North Augusta Chiropractor | Pregnancy & Pediatric Care | Juniper',
    h1: 'Pregnancy & Pediatric Chiropractor in North Augusta, SC',
    description:
      'Visit Juniper Family Chiropractic in North Augusta, SC for pregnancy and pediatric chiropractic care. Find our address, directions, and booking information.',
    introduction:
      'Dr. Ashley Felak provides pregnancy and pediatric chiropractic care at Juniper Family Chiropractic in North Augusta, on West Avenue. Call our office for help planning your visit or finding directions.',
    bookingUrl: 'https://juniperfamilychiro.janeapp.com',
  },
};

export function createStructuredData(): Record<string, unknown> {
  const locations = Object.values(LOCATION_DETAILS);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: 'Juniper Family Chiropractic',
        url: SITE_URL,
        location: locations.map(location => ({
          '@id': `${SITE_URL}/${location.slug}#location`,
        })),
      },
      ...locations.map(location => ({
        '@type': ['LocalBusiness', 'Chiropractor'],
        '@id': `${SITE_URL}/${location.slug}#location`,
        name: 'Juniper Family Chiropractic',
        url: `${SITE_URL}/${location.slug}`,
        telephone: location.phoneStructured,
        address: {
          '@type': 'PostalAddress',
          streetAddress: location.streetAddress,
          addressLocality: location.city,
          addressRegion: location.state,
          postalCode: location.postalCode,
          addressCountry: 'US',
        },
        hasMap: location.directionsUrl,
        employee: {
          '@type': 'Person',
          name: location.doctorName,
        },
        parentOrganization: { '@id': ORGANIZATION_ID },
      })),
    ],
  };
}
