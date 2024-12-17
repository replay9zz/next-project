// src/components/HoverInfoDisplay.tsx

import React from 'react';

interface HoverInfoDisplayProps {
    text: string;
}

const HoverInfoDisplay: React.FC<HoverInfoDisplayProps> = ({ text }) => {
    if (!text) return null;

    return (
        <div style={{
            position: 'absolute',
            bottom: '20px',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '10px',
            borderRadius: '5px'
        }}>
            &quot;{text}&quot;
        </div>
    );
};

export default HoverInfoDisplay;
