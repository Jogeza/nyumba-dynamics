import hero from '../assets/images/to use/IMG_20260920_083926_771.jpg.jpeg';
import landscaping from '../assets/images/to use/IMG_20260920_083915_178.jpg.jpeg';
import plumbing from '../assets/images/to use/IMG_20260920_083944_714.jpg.jpeg';
import electrical from '../assets/images/to use/IMG_20260920_083927_470.jpg.jpeg';
import welding from '../assets/images/to use/IMG_20260920_083951_109.jpg.jpeg';
import pool from '../assets/images/to use/IMG_20260920_083951_411.jpg.jpeg';
import locksmith from '../assets/images/to use/IMG_20260920_084001_504.jpg.jpeg';
import cleaning from '../assets/images/to use/IMG_20260920_084008_628.jpg.jpeg';
import technician from '../assets/images/to use/IMG_20260920_083944_798.jpg.jpeg';
import maintenance from '../assets/images/to use/IMG_20260920_083934_277.jpg.jpeg';
import fabrication from '../assets/images/to use/IMG_20260920_083951_214.jpg.jpeg';
import garden from '../assets/images/to use/IMG_20260920_084008_976.jpg.jpeg';

export const siteImages = { hero, landscaping, plumbing, electrical, welding, pool, locksmith, cleaning, technician, maintenance, fabrication, garden } as const;

export const serviceImages: Record<string, string> = {
  'electrical-services': electrical, 'plumbing-services': plumbing, 'masonry-works': maintenance,
  carpentry: technician, welding, painting: maintenance, cleaning, 'baby-proofing': maintenance,
  locksmith, 'appliance-repair': technician, 'air-conditioning': technician,
  'preventive-maintenance': maintenance, 'safety-proofing': locksmith, 'smart-homes': electrical,
  'cctv-installation': electrical, 'security-systems': electrical, landscaping,
  'pest-control': landscaping, 'interior-design': plumbing, 'swimming-pool-maintenance': pool,
  'roof-tile-cleaning': cleaning,
};

export const serviceAlt: Record<string, string> = {
  'electrical-services': 'Nyumba Dynamics technician installing an exterior electrical light',
  'plumbing-services': 'Nyumba Dynamics plumber fitting bathroom pipework',
  'masonry-works': 'Nyumba Dynamics technician carrying out property maintenance',
  carpentry: 'Nyumba Dynamics technician at work on site',
  welding: 'Nyumba Dynamics fabricator welding a metal gate frame',
  painting: 'Nyumba Dynamics technician preparing a wall for maintenance work',
  cleaning: 'Nyumba Dynamics cleaner washing an exterior paved area',
  'baby-proofing': 'Nyumba Dynamics technician assessing a property fixture',
  locksmith: 'Nyumba Dynamics technician servicing a window security lock',
  'appliance-repair': 'Nyumba Dynamics technician carrying tools on site',
  'air-conditioning': 'Nyumba Dynamics maintenance technician on site',
  'preventive-maintenance': 'Nyumba Dynamics technician inspecting bathroom fittings',
  'safety-proofing': 'Nyumba Dynamics technician checking a window security fitting',
  'smart-homes': 'Nyumba Dynamics technician installing connected exterior lighting',
  'cctv-installation': 'Nyumba Dynamics technician mounting exterior electrical equipment',
  'security-systems': 'Nyumba Dynamics technician working on an exterior security installation',
  landscaping: 'Nyumba Dynamics landscaper maintaining a Kampala garden',
  'pest-control': 'Nyumba Dynamics technician maintaining dense garden planting',
  'interior-design': 'Nyumba Dynamics technician completing a bathroom fitting',
  'swimming-pool-maintenance': 'Nyumba Dynamics technician cleaning a residential swimming pool',
  'roof-tile-cleaning': 'Nyumba Dynamics cleaner washing an exterior surface',
};
