import {
    Banknote,
    Camera,
    ClipboardSignature,
    FileDown,
    LayoutDashboard, MessagesSquare, Pencil, PieChart, ScrollText, Share2, Sparkles, Trash2, Users2, Wallet
} from "lucide-react"
import { TSidebar, TSlider } from "@/types/index"

export const sidebarData: TSidebar[] = [
    {
        icon: <LayoutDashboard className="h-5 w-5" />,
        title: "Dashboard",
        link: "/dashboard/board"
    },
    {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Friends",
        link: "/dashboard/friends"
    },
    {
        icon: <Users2 className="h-5 w-5" />,
        title: "Groups",
        link: "/dashboard/groups"
    },
    {
        icon: <ScrollText className="h-5 w-5" />,
        title: "Activities",
        link: "/dashboard/activities"
    },
]

export const customSwiperData: TSlider[] = [
    {
        icon: <>🛩</>,
        title: "on trips.",
        className: "text-teal-600 hover:text-teal-700"
    },
    {
        icon: <>🏘</>,
        title: "with housemates.",
        className: "text-purple-600 hover:text-purple-700"
    },
    {
        icon: <>💗</>,
        title: "with your partner.",
        className: "text-red-600 hover:text-red-700"
    },
    {
        icon: <>⭐</>,
        title: "with anyone.",
        className: "text-yellow-600 hover:text-yellow-700"
    }
]


export const groupActions: TSlider[] = [
    {
        icon: <Banknote size={"1.25rem"} />,
        title: "Settle-up"
    },
    {
        icon: <Wallet size={"1.25rem"} />,
        title: "Balances"
    },
    {
        icon: <PieChart size={"1.25rem"} />,
        title: "Total"
    },
    {
        icon: <Share2 size={"1.25rem"} />,
        title: "Invite"
    },
    {
        icon: <ClipboardSignature size={"1.25rem"} />,
        title: "Whiteboard"
    },
    {
        icon: <FileDown size={"1.25rem"} />,
        title: "Export"
    },
];


export const transactionActions: TSlider[] = [
    {
        icon: <MessagesSquare size={"1.25rem"} />,
        title: "Messages"
    },
    {
        icon: <Camera size={"1.25rem"} />,
        title: "Picture"
    },
    {
        icon: <Trash2 size={"1.25rem"} />,
        title: "Delete"
    },
    {
        icon: <Pencil size={"1.25rem"} />,
        title: "Edit"
    },
];
