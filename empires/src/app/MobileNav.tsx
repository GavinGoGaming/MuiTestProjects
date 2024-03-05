import * as React from 'react';
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';

export default function MobileNav() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu>
        <MenuItem onClick={function(){window.location.href='/';}}>Home</MenuItem>
        {/* <MenuItem onClick={function(){window.location.href='/about';}}>About</MenuItem> */}
        <MenuItem onClick={function(){window.location.href='https://www.youtube.com/playlist?list=PL_LjAo92qZzd_q7zY8cNIk6G6t1gDEF4X';}}>Episodes</MenuItem>
        <MenuItem onClick={function(){window.location.href='/cast';}}>Team</MenuItem>
        <MenuItem onClick={function(){window.location.href='/contest';}}>Contest</MenuItem>
        <MenuItem onClick={function(){window.location.href='https://www.patreon.com/designingempires';}}>Patreon</MenuItem>
      </Menu>
    </Dropdown>
  );
}