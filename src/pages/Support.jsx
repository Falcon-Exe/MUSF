import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaHeart, FaHandHoldingHeart, FaUniversity, FaQrcode } from 'react-icons/fa';
import '../styles/Pages.css';

const Support = () => {
    const { t } = useTranslation();
    const upiId = "muhsabir.c@oksbi"; // Replace with real UPI ID
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000);
    };

    return (
        <div className="support-page min-h-screen">
            <header className="page-header pattern-bg section-bg-green text-white">
                <div className="container relative z-10">
                    <h1 className="page-title text-white">{t('nav.support')}</h1>
                    <p className="page-subtitle text-white">Support our mission to empower students through knowledge and leadership.</p>
                </div>
            </header>

            <div className="container section">
                <div className="support-max-width" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="support-content content-block text-center" style={{ marginBottom: '4rem' }}>
                        <h2>Why Support MUSF?</h2>
                        <p>
                            Your contributions directly fund our educational workshops, intellectual conclaves,
                            community outreach programs, and student welfare initiatives.
                        </p>
                    </div>

                    <div className="donation-methods">
                        <div className="support-card vm-card pattern-bg light-pattern text-center" style={{ padding: '3rem 2rem' }}>
                            <FaQrcode size={64} className="text-accent" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ marginBottom: '1rem' }}>Support via UPI</h2>
                            <p style={{ marginBottom: '2rem' }}>Scan the QR code or use the UPI ID below</p>

                            <div className="qr-container" style={{
                                width: '220px',
                                height: '220px',
                                background: 'white',
                                margin: '0 auto 2rem',
                                padding: '15px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src="/upi_qr.jpeg"
                                    alt="UPI QR Code"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            <div className="upi-id-box" style={{
                                background: 'rgba(6, 78, 59, 0.05)',
                                padding: '1rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(6, 78, 59, 0.1)'
                            }}>
                                <span style={{ fontWeight: '600', fontSize: '1.1rem', color: 'var(--color-green)' }}>{upiId}</span>
                                <button
                                    className="btn btn-outline"
                                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                                    onClick={() => copyToClipboard(upiId)}
                                >
                                    {copySuccess || 'Copy'}
                                </button>
                            </div>

                            <a
                                href={`upi://pay?pa=${upiId}&pn=MUSF&cu=INR`}
                                className="btn btn-primary"
                                style={{ width: '100%', maxWidth: '300px' }}
                            >
                                Pay with UPI App
                            </a>
                            <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: '0.7' }}>
                                (Works on mobile devices with UPI apps installed)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
