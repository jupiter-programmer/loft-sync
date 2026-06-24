import { 
    AiOutlineDollarCircle, 
    BsHeartPulse, 
    FaChartLine, 
    FaRegCalendarAlt, 
    IoSettingsOutline, 
    LuEgg, 
    MdOutlineRunningWithErrors, 
    PiBird, 
    RiHome9Line, 
    RxDashboard, 
    TbReport, 
    TiMessages 
} from '@/assets/icons';
// items
export const sidebarItems = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: RxDashboard,
    },
    {
        label: 'Pigeons',
        href: '/pigeon',
        icon: PiBird,
    },
    {
        label: 'Breeders',
        href: '/breeder',
        icon: LuEgg,
    },
    {
        label: 'Races',
        href: '/race',
        icon: MdOutlineRunningWithErrors,
    },
    {
        label: 'Results',
        href: '/result',
        icon: FaChartLine,
    },
    {
        label: 'Health',
        href: '/health',
        icon: BsHeartPulse,
    },
    {
        label: 'Loft',
        href: '/loft',
        icon: RiHome9Line,
    },
    {
        label: 'Finances',
        href: '/finance',
        icon: AiOutlineDollarCircle,
    },
    {
        label: 'Reports',
        href: '/report',
        icon: TbReport,
    },
    {
        label: 'Calendar',
        href: '/calendar',
        icon: FaRegCalendarAlt,
    },
    {
        label: 'Messages',
        href: '/message',
        icon: TiMessages,
    },
    {
        label: 'Settings',
        href: '/settings',
        icon: IoSettingsOutline,
    },
];