import { styled } from '@mui/material'

const AppBar = styled('div')({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'static',
  color: 'inherit',
})

const Image = styled('img')({
  maringLeft: '15px',
})

const Heading = styled('h2')({
  color: 'rgba(0,183,255, 1)',
  align: 'center',
})

export { AppBar, Image, Heading }
