// Curated real-project imagery for Nyumba Dynamics.
// v1 originals stay intact; v2 additions are clearly marked.
// Each new import is assigned a semantic name so no two sections
// share the same photo.

import hero         from '../assets/images/to use/IMG_20260920_083926_771.jpg.jpeg';
import landscaping  from '../assets/images/to use/IMG_20260920_083915_178.jpg.jpeg';
import plumbing     from '../assets/images/to use/IMG_20260920_083944_714.jpg.jpeg';
import electrical   from '../assets/images/to use/IMG_20260920_083927_470.jpg.jpeg';
import welding      from '../assets/images/to use/IMG_20260920_083951_109.jpg.jpeg';
import pool         from '../assets/images/to use/IMG_20260920_083951_411.jpg.jpeg';
import locksmith    from '../assets/images/to use/IMG_20260920_084001_504.jpg.jpeg';
import cleaning     from '../assets/images/to use/IMG_20260920_084008_628.jpg.jpeg';
import technician   from '../assets/images/to use/IMG_20260920_083944_798.jpg.jpeg';
import maintenance  from '../assets/images/to use/IMG_20260920_083934_277.jpg.jpeg';
import fabrication  from '../assets/images/to use/IMG_20260920_083951_214.jpg.jpeg';
import garden       from '../assets/images/to use/IMG_20260920_084008_976.jpg.jpeg';

// ── v2 additions ────────────────────────────────────────────────────────────
// Used across service cards, smart-home teaser, and about editorial grid
// so each section shows a unique, distinct image.
import construction1 from '../assets/images/to use/IMG_20260920_083915_214.jpg.jpeg';
import smartHome1    from '../assets/images/to use/IMG_20260920_083951_068.jpg.jpeg';
import maintenance2  from '../assets/images/to use/IMG_20260920_083944_790.jpg.jpeg';
import cctv1         from '../assets/images/to use/IMG_20260920_083927_303.jpg.jpeg';
import cleaning2     from '../assets/images/to use/IMG_20260920_084009_121.jpg.jpeg';
import plumbing2     from '../assets/images/to use/IMG_20260920_083934_838.jpg.jpeg';
import safety1       from '../assets/images/to use/IMG_20260920_083915_512.jpg.jpeg';
import lifestyle1    from '../assets/images/to use/IMG_20260920_083926_907.jpg.jpeg';
import field1        from '../assets/images/to use/IMG_20260920_083915_457.jpg.jpeg';
import field2        from '../assets/images/to use/IMG_20260920_083951_523.jpg.jpeg';
import roofTileCleaning from '../assets/images/services/roof-tile-cleaning-v2.webp';
import smartHomeCctv from '../assets/images/generated/smart-home-cctv-kampala.webp';
import smartLockInstallation from '../assets/images/generated/smart-lock-installation-kampala.webp';

export const siteImages = {
    // v1 originals
    hero, landscaping, plumbing, electrical, welding, pool,
    locksmith, cleaning, technician, maintenance, fabrication, garden,
    // v2 additions
    construction1, smartHome1, maintenance2, cctv1, cleaning2,
    plumbing2, safety1, lifestyle1, field1, field2,
    smartHomeCctv, smartLockInstallation,
} as const;

// Per-service image map (for ServiceDetail and service cards)
export const serviceImages: Record<string, string> = {
    'electrical-services':        construction1,
    'plumbing-services':          plumbing2,
    'masonry-works':              maintenance,
    carpentry:                    technician,
    welding,
    painting:                     field1,
    cleaning:                     cleaning2,
    'baby-proofing':              safety1,
    locksmith,
    'appliance-repair':           technician,
    'air-conditioning':           technician,
    'preventive-maintenance':     maintenance2,
    'safety-proofing':            locksmith,
    'smart-homes':                smartHome1,
    'cctv-installation':          cctv1,
    'security-systems':           electrical,
    landscaping,
    'pest-control':               garden,
    'interior-design':            plumbing,
    'swimming-pool-maintenance':  pool,
    'roof-tile-cleaning':         roofTileCleaning,
};

export const serviceAlt: Record<string, string> = {
    'electrical-services':        'Nyumba Dynamics technician installing an exterior electrical light',
    'plumbing-services':          'Nyumba Dynamics plumber fitting bathroom pipework',
    'masonry-works':              'Nyumba Dynamics technician carrying out property maintenance',
    carpentry:                    'Nyumba Dynamics technician at work on site',
    welding:                      'Nyumba Dynamics fabricator welding a metal gate frame',
    painting:                     'Nyumba Dynamics technician preparing a wall for maintenance work',
    cleaning:                     'Nyumba Dynamics cleaner washing an exterior paved area',
    'baby-proofing':              'Nyumba Dynamics technician assessing a property fixture',
    locksmith:                    'Nyumba Dynamics technician servicing a window security lock',
    'appliance-repair':           'Nyumba Dynamics technician carrying tools on site',
    'air-conditioning':           'Nyumba Dynamics maintenance technician on site',
    'preventive-maintenance':     'Nyumba Dynamics technician completing a property maintenance check',
    'safety-proofing':            'Nyumba Dynamics technician checking a window security fitting',
    'smart-homes':                'Nyumba Dynamics technician configuring a connected smart home system',
    'cctv-installation':          'Nyumba Dynamics technician mounting exterior CCTV equipment',
    'security-systems':           'Nyumba Dynamics technician working on a security installation',
    landscaping:                  'Nyumba Dynamics landscaper maintaining a Kampala garden',
    'pest-control':               'Nyumba Dynamics technician treating a Kampala garden',
    'interior-design':            'Nyumba Dynamics technician completing a bathroom fitting',
    'swimming-pool-maintenance':  'Nyumba Dynamics technician cleaning a residential swimming pool',
    'roof-tile-cleaning':         'Professional technician safely cleaning terracotta roof tiles in Kampala',
};
