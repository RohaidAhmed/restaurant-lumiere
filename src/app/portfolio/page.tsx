import React from 'react';

const FiverrGigImages = () => {
    const gigs = [
        {
            title: "Bug Fixes &\nFeatures",
            subtitle: "Fast, Reliable Solutions",
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "🐛",
            tags: ["React", "Node.js", "Python", "24hr Delivery"],
            price: "$25",
            color: "#667eea"
        },
        {
            title: "Full Stack\nWeb Apps",
            subtitle: "React + Node.js + Database",
            gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            icon: "💻",
            tags: ["Custom Design", "API Integration", "Authentication", "Deployment"],
            price: "$150",
            color: "#f5576c"
        },
        {
            title: "REST API\nDevelopment",
            subtitle: "Secure & Scalable APIs",
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "🔌",
            tags: ["Node.js", "Python", "Documentation", "3rd Party Integration"],
            price: "$50",
            color: "#4facfe"
        },
        {
            title: "Design to\nCode",
            subtitle: "Figma • PSD • XD to React",
            gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            icon: "🎨",
            tags: ["Pixel Perfect", "Responsive", "React/HTML", "Animations"],
            price: "$80",
            color: "#fa709a"
        }
    ];

    return (
        <div style={{ padding: '40px', background: '#f5f5f5', minHeight: '100vh' }}>
            <div style={{
                textAlign: 'center',
                marginBottom: '50px',
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                maxWidth: '800px',
                margin: '0 auto 50px'
            }}>
                <h2 style={{ fontSize: '32px', marginBottom: '15px', color: '#1a1a1a' }}>
                    📸 Your Fiverr Gig Images
                </h2>
                <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
                    Screenshot each card below (right-click → Save Image or use screenshot tool)<br />
                    Recommended size: 800x600px for Fiverr
                </p>
            </div>

            {gigs.map((gig, index) => (
                <div key={index} style={{
                    width: '800px',
                    height: '600px',
                    background: gig.gradient,
                    borderRadius: '20px',
                    padding: '60px',
                    marginBottom: '40px',
                    position: 'relative',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    margin: '0 auto 40px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
                }}>
                    {/* Decorative circles */}
                    <div style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        top: '-100px',
                        right: '-100px'
                    }} />
                    <div style={{
                        position: 'absolute',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        bottom: '-50px',
                        left: '-50px'
                    }} />

                    {/* Icon */}
                    <div style={{
                        width: '100px',
                        height: '100px',
                        background: 'rgba(255,255,255,0.2)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '30px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        fontSize: '50px',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        {gig.icon}
                    </div>

                    {/* Title */}
                    <h1 style={{
                        color: 'white',
                        fontSize: '48px',
                        fontWeight: '800',
                        marginBottom: '20px',
                        lineHeight: '1.2',
                        whiteSpace: 'pre-line',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        {gig.title}
                    </h1>

                    {/* Subtitle */}
                    <div style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '24px',
                        marginBottom: '30px',
                        fontWeight: '500',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        {gig.subtitle}
                    </div>

                    {/* Tags */}
                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        flexWrap: 'wrap',
                        position: 'relative',
                        zIndex: 2
                    }}>
                        {gig.tags.map(tag => (
                            <div key={tag} style={{
                                background: 'rgba(255,255,255,0.15)',
                                padding: '12px 24px',
                                borderRadius: '25px',
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: '600',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* Price tag */}
                    <div style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '40px',
                        background: 'white',
                        color: gig.color,
                        padding: '15px 30px',
                        borderRadius: '50px',
                        fontSize: '24px',
                        fontWeight: '800',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                        zIndex: 2
                    }}>
                        From {gig.price}
                    </div>
                </div>
            ))}

            {/* Instructions */}
            <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '15px',
                maxWidth: '800px',
                margin: '40px auto',
                textAlign: 'center',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
                <h3 style={{ marginBottom: '15px', fontSize: '24px' }}>✅ Next Steps</h3>
                <ol style={{
                    fontSize: '16px',
                    lineHeight: '2',
                    color: '#666',
                    textAlign: 'left',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    <li>Screenshot each card above</li>
                    <li>Save as PNG or JPG (800x600px)</li>
                    <li>Upload to Fiverr when creating your gigs</li>
                    <li>You can edit colors/text later if needed!</li>
                </ol>
            </div>
        </div>
    );
};

export default FiverrGigImages;