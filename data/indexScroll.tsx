import Image from "next/image";

export const scrollContent: {
    title: string;
    description: string;
    content?: React.ReactNode; // Asegúrate de que content sea un ReactNode opcional
}[] = [
        {
            title: "Share your releases with your smart-link",
            description:
                "Create a fully customizable link that displays your favorite releases, and provides options on where to listen. Perfect for easily sharing your music catalog, all in one place.  With or without a custom domain.",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/phone.svg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Customize the design based on your release",
            description:
                "Engage your audience – add links, images, text, and embeds from YouTube, SoundCloud, Spotify, TikTok, Twitch, and more! 🔥 ",
            content: (
                <div className="h-full w-full  flex items-center justify-center text-white">
                    <Image
                        src="/widget.svg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "A music store app to monetize your songs and get feedback.",
            description:
                "We have developed the Music Store you’ve been waiting for. Sell your songs, mashups, remixes, covers, upload your DJ sets, and much more. Monetize every time you get any streaming. Give away discounts and coupons and allow your fans to support you by getting likes and comments. Promote your releases with ads and reach new audiences Worldwide.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src="/dashboard.svg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "All your analytics in one place",
            description:
                "Monitor your sales, streams, and earnings data in a dedicated analytics portal with transparent monthly statements. Split payments with your collaborators automatically, add payment splits for each release, and automatically pay your team and collaborators.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src="/Statuse.svg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
        {
            title: "Take control of your music business and sales.",
            description:
                "Monitor your sales, streams, and earnings data in a dedicated analytics portal with transparent monthly statements. Split payments with your collaborators automatically, add payment splits for each release, and automatically pay your team and collaborators.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <Image
                        src="/stadistics.svg"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                        alt="linear board demo"
                    />
                </div>
            ),
        },
    ];