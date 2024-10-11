import React from 'react'

const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M18.33 1.67L1.67 7.5L9.17 10.83L18.33 1.67Z" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.33 1.67L12.5 18.33L9.17 10.83" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ShareIcon