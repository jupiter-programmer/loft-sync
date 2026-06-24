import NextTopLoader from 'nextjs-toploader';
export default function TopLoader () {
    return (
        <NextTopLoader
            color='var(--lightpink)'
            height={3}
            showSpinner={false}
        />
    );  
};