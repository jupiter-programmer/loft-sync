'use client';
import Link from 'next/link';
import { Fragment, MouseEvent, useState } from 'react';
import { Avatar, ButtonBase, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { FiUser, IoIosLogOut, IoSettingsOutline } from '@/assets/icons';
import { Sejin } from '@/assets/images';
// component
export default function AccountMenu () {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <ButtonBase
        onClick={handleClick}
        sx={styles.buttonBase}
      >
        <Avatar src={Sejin.src} sx={styles.avatar}>
            S
        </Avatar>
      </ButtonBase>
      <Menu
        open={open}
        anchorEl={anchorEl}
        id='account-menu'
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: styles.menu,
          },
        }}
        sx={{ zIndex: 'var(--z-index)' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        { items.map(({ href, title, icon: Icon }, i) => 
          <Link href={href} key={i}>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Icon/>
              </ListItemIcon>
              { title }
            </MenuItem>
          </Link>
        )}
        <Divider/>
        <MenuItem>
          <ListItemIcon>
            <IoIosLogOut color='#ff2222'/>
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
// menu > items
const items = [
  { href: '/profile', title: 'Profile', icon: FiUser },
  { href: '/settings', title: 'Settings', icon: IoSettingsOutline },
];
// styles
const styles = {
  buttonBase: { 
    p: 0.5,
    display: { xs: 'none', md: 'inherit' },
    textAlign: 'end',
    borderRadius: 6,
    cursor: 'pointer',
  },
  avatar: { 
    background: 'var(--gradient-primary)',
  },
  menu: {
    mt: 1.5,
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: '#08062f',
      borderLeft: '1px solid var(--border)',
      borderTop: '1px solid var(--border)',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
};