import Image from "next/image";

export const dummyContent: {
    title: string;
    description: React.ReactNode;
    badge: string;
    content: React.ReactNode;
}[] = [
        {
            title: "For Artist",
            description: (
                <>
                    <p>
                    Le Guaro is a project by independent musicians dedicated to fostering artist independence. We support new producers with affordable music production services, allowing you to distribute your music worldwide and sell it in your own online store while keeping 100% of your profits.
                    </p>
                    <br></br>
                    <p>
                    Additionally, we offer professional marketing services to promote your music and video releases. You can submit your music to playlists, radios, and more, all through our platform.
                    </p>
                </>
            ),
            badge: "Artist",
            content: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-16 h-16">
                    <path fill="#ED1566" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM183.2 132.6c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L176 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L242.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm160 0c-1.3-2.8-4.1-4.6-7.2-4.6s-5.9 1.8-7.2 4.6l-16.6 34.7-38.1 5c-3.1 .4-5.6 2.5-6.6 5.5s-.1 6.2 2.1 8.3l27.9 26.5-7 37.8c-.6 3 .7 6.1 3.2 7.9s5.8 2 8.5 .6L336 240.5l33.8 18.3c2.7 1.5 6 1.3 8.5-.6s3.7-4.9 3.2-7.9l-7-37.8L402.4 186c2.2-2.1 3.1-5.3 2.1-8.3s-3.5-5.1-6.6-5.5l-38.1-5-16.6-34.7zm6.3 175.8c-28.9 6.8-60.5 10.5-93.6 10.5s-64.7-3.7-93.6-10.5c-18.7-4.4-35.9 12-25.5 28.1c24.6 38.1 68.7 63.5 119.1 63.5s94.5-25.4 119.1-63.5c10.4-16.1-6.8-32.5-25.5-28.1z"/>
                </svg>
            ),
        },
        {
            title: "For record label",
            description: (
                <>
                    <p>
                    You can now support more independent musicians with our affordable tools for distributing your team's music. It's time to grow your own record label.
                    </p>
                    <br />
                    <p>
                    Our platform allows limitless growth, enabling you to release music under your name or label on stores like Beatport and Junodownload. You can release unlimited music while protecting your artists with copyright and content ID.
                    </p>
                </>
            ),
            badge: "RECORD LABEL",
            content: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-16 h-16">
                    <path fill="#ED1566" d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                </svg>
            ),
        },
        {
            title: "For distributors",
            description: (
                <>
                    <p>
                    Get accurate and reliable sales details with a user-friendly interface and 24/7 live chat customer support for any questions.
                    </p>
                    <br />
                    <p>
                    Manage your music business from one place with the best assistance available. We communicate via live chat or arrange calls as needed. Managed by artists and producers, we understand your needs and provide clear support. By joining Le Guaro, you become part of a supportive community of artists.
                    </p>
                </>
            ),
            badge: "Distributors",
            content: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-16 h-16">
                    <path fill="#ED1566" d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>
                </svg>
            ),
        },
    ];
