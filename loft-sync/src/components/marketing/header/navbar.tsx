import { Button, Stack } from '@mui/material';
import { CustomLink } from '@/components/ui';
export default function Navbar () {
    return (
        <Stack 
            direction='row' 
            spacing={2} 
            sx={{ 
                display: { 
                    xs: 'none', 
                    md: 'inherit', 
                },
                py: 2.5,
            }}
        >
            { links.map(({ href, label }, i) => 
                <CustomLink 
                    href={href} 
                    className='nav-link' 
                    key={i}
                >
                    <Button sx={{ fontWeight: 400 }}>
                        { label }
                    </Button>
                </CustomLink>
            )}
        </Stack>
    );
};
const links = [
    { href: '/features', label: 'Features' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
];