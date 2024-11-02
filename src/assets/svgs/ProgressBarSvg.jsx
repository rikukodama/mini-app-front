export function ProgressBarSvg() {
    return (
        <svg
            width="93"
            height="19"
            viewBox="0 0 93 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_24_202)">
                <rect x="7" y="7" width="25" height="5" rx="2.5" fill="url(#paint0_linear_24_202)" />
            </g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 9.5C6 7.567 7.23263 6 8.75316 6H90.2468C91.7674 6 93 7.567 93 9.5C93 11.433 91.7674 13 90.2468 13H8.75317C7.23264 13 6 11.433 6 9.5ZM34.6329 7.75C34.6329 7.5567 34.7562 7.4 34.9082 7.4C35.0603 7.4 35.1835 7.5567 35.1835 7.75V11.25C35.1835 11.4433 35.0603 11.6 34.9082 11.6C34.7562 11.6 34.6329 11.4433 34.6329 11.25V7.75ZM64.0918 7.4C63.9397 7.4 63.8165 7.5567 63.8165 7.75V11.25C63.8165 11.4433 63.9397 11.6 64.0918 11.6C64.2438 11.6 64.3671 11.4433 64.3671 11.25V7.75C64.3671 7.5567 64.2438 7.4 64.0918 7.4Z"
                fill="white"
                fillOpacity="0.1"
            />
            <rect x="7" y="7" width="25" height="5" rx="2.5" fill="url(#paint1_linear_24_202)" />
            <mask id="mask0_24_202" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="7" y="7" width="25" height="5">
                <rect x="7" y="7" width="25" height="5" rx="2.5" fill="url(#paint2_linear_24_202)" />
            </mask>
            <g mask="url(#mask0_24_202)">
                <g opacity="0.2">
                    {/* You can consider extracting these paths to a separate function for better readability */}
                    {Array.from({ length: 40 }).map((_, index) => (
                        <path
                            key={index}
                            d={`M${8 + index * 2.2} 6.28266L${8 + index * 2.2 + 0.3915} 6.77763L${3 + index * 2.2} 12.7173L${3 + index * 2.2 - 0.3915} 12.2224L${8 + index * 2.2} 6.28266Z`}
                            fill="white"
                        />
                    ))}
                </g>
            </g>
            <defs>
                <filter id="filter0_f_24_202" x="0" y="0" width="39" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur_24_202" />
                </filter>
                <linearGradient id="paint0_linear_24_202" x1="7" y1="9.5" x2="32" y2="9.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.454682" stopColor="#D83232" />
                    <stop offset="1" stopColor="#FFBE56" />
                </linearGradient>
                <linearGradient id="paint1_linear_24_202" x1="7" y1="9.5" x2="32" y2="9.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.454682" stopColor="#D83232" />
                    <stop offset="1" stopColor="#FFBE56" />
                </linearGradient>
                <linearGradient id="paint2_linear_24_202" x1="7" y1="9.5" x2="32" y2="9.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.454682" stopColor="#D83232" />
                    <stop offset="1" stopColor="#FFBE56" />
                </linearGradient>
            </defs>
        </svg>
    );
}