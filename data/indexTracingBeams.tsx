import Image from "next/image";

export const dummyContent: {
    title: string;
    description: React.ReactNode;
    badge: string;
    image: string;
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
            image:
                "/artist.svg",
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
            image:
                "/label.svg",
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
            image:
                "/distributors.svg",
        },
    ];
