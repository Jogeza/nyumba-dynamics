import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import blogData from '../data/blogData.json';
import { siteImages } from '../data/siteImages.ts';
import PageSEO from '../component/PageSEO.tsx';

const articles: Record<string, { intro: string; sections: Array<{ title: string; text: string }> }> = {
    'electrical-fault-warning-signs': {
        intro: 'Repeated breaker trips, a burning smell, warm sockets and flickering lights can point to a fault that needs proper testing. Treat these signs seriously and avoid repeatedly resetting a circuit that will not stay on.',
        sections: [
            { title: 'Make the area safe', text: 'Switch off the affected appliance or circuit if it is safe to do so. Keep people away from exposed wires, water near electrical fittings, smoke or heat, and call for urgent help when there is an immediate risk.' },
            { title: 'Share useful details', text: 'Note when the problem started, which rooms or appliances are affected, and what happened just before the fault. Clear information helps the electrician arrive with the right testing equipment and likely replacement parts.' },
            { title: 'Ask for testing before repair', text: 'A lasting repair starts with identifying the cause. The completed circuit or fitting should be tested before it is put back into use.' },
        ],
    },
    'before-a-plumber-arrives': {
        intro: 'A few quick actions can reduce water damage and help a plumber assess the problem faster.',
        sections: [
            { title: 'Control the water', text: 'Close the nearest isolation valve or the main supply if water is escaping continuously. Move furniture and electrical items away from the wet area where it is safe to do so.' },
            { title: 'Describe the problem clearly', text: 'Share the affected fixture, when the problem began, whether it is constant or intermittent, and any recent plumbing work. A short video can be useful for active leaks or unusual sounds.' },
            { title: 'Leave permanent work to the plumber', text: 'Temporary containment can limit damage, but improvised fittings and drain chemicals can make some faults worse. Wait for the cause and repair options to be explained before approving the work.' },
        ],
    },
    'planning-cctv-coverage': {
        intro: 'Good CCTV coverage is planned around the property, the risks you want to manage and the detail you need to see—not simply the number of cameras.',
        sections: [
            { title: 'Start with entrances and movement', text: 'Map gates, doors, parking, loading areas and the routes people use. Each camera should have a clear purpose, such as identifying a visitor or monitoring movement across a boundary.' },
            { title: 'Check day and night conditions', text: 'Sun glare, security lights, trees and dark corners all affect the image. Camera position and lighting should be checked in the conditions in which the footage will be needed.' },
            { title: 'Plan recording and access', text: 'Agree on retention time, storage capacity, backup power and who can view footage. Remote access should be configured securely and demonstrated at handover.' },
        ],
    },
    'pool-maintenance-checklist': {
        intro: 'Consistent checks keep pool water comfortable, protect the finish and help pumps and filters work efficiently.',
        sections: [
            { title: 'Check the water and surfaces', text: 'Monitor clarity, water level and chemical balance. Brush walls, remove debris and pay attention to staining, algae or changes around joints and fittings.' },
            { title: 'Inspect circulation equipment', text: 'Empty baskets, check filter pressure and listen for unusual pump noise. Weak flow, air in the system or persistent pressure changes deserve further inspection.' },
            { title: 'Keep a simple service record', text: 'Record test results, chemicals added and maintenance completed. A short history makes recurring problems easier to identify and helps plan servicing.' },
        ],
    },
    'kampala-garden-maintenance': {
        intro: 'A manageable garden starts with regular attention to growth, drainage and the way each area is actually used.',
        sections: [
            { title: 'Set a realistic routine', text: 'Frequent light trimming, weeding and clearing is easier on plants and budgets than occasional heavy cutting. Match the schedule to the rainy and dry seasons.' },
            { title: 'Watch how water moves', text: 'Clear channels and drains before heavy rain, and address areas where water collects against paths, walls or foundations.' },
            { title: 'Choose plants for the location', text: 'Consider sunlight, soil, mature size and maintenance needs before planting. The right plant in the right place reduces replacement and repeated pruning.' },
        ],
    },
    'choosing-a-cleaning-service': {
        intro: 'The right cleaning service begins with a clear scope. A home handover, routine office clean and post-construction clean require different time, tools and staffing.',
        sections: [
            { title: 'List the spaces and priorities', text: 'State which rooms or work areas are included, the surfaces that need special care, and the result you expect. Mention access limits, water availability and preferred working hours.' },
            { title: 'Confirm what is included', text: 'Ask whether equipment, supplies, waste removal and difficult-access areas are covered. A written scope makes the quote easier to compare and the handover easier to check.' },
            { title: 'Agree on the final check', text: 'Walk through the completed work with the supervisor or cleaner. Raise missed areas before the team leaves so they can be addressed promptly.' },
        ],
    },
};

const imageMap: Record<string, string> = {
    electrical: siteImages.electrical,
    plumbing: siteImages.plumbing2,
    cctv: siteImages.cctv1,
    pool: siteImages.pool,
    landscaping: siteImages.landscaping,
    cleaning: siteImages.cleaning2,
};

const InsightDetail: React.FC = () => {
    const { slug = '' } = useParams<{ slug: string }>();
    const article = articles[slug];
    const card = blogData.find((item) => item.link === `/blog/${slug}`);

    if (!article || !card) return <Navigate to="/blog" replace />;

    return (
        <main>
            <PageSEO title={card.title} description={card.desc} />
            <section className="heroSection insight-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.86), rgba(0,0,0,.25)), url(${imageMap[card.image]})` }}>
                <div className="container">
                    <h1 className="img-header-text">{card.title}</h1>
                    <div className="breadcrumb-group"><Link to="/">HOME / </Link><Link to="/blog">INSIGHTS</Link></div>
                </div>
            </section>
            <article className="insight-article">
                <div className="container insight-article-inner">
                    <p className="insight-date">{card.date}</p>
                    <p className="insight-lead">{article.intro}</p>
                    {article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
                    <div className="insight-article-cta">
                        <h2>Need help with your property?</h2>
                        <p>Tell us what needs attention and where the property is located.</p>
                        <Link to="/consultation" className="btn-quote">Request a quote</Link>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default InsightDetail;
