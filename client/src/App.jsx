import { Container, Grow, Grid} from '@mui/material';
import memories from './images/memories.png'
import { Posts } from './components/Posts/Posts'
import { Form } from './components/Form/Form';
import {Image, AppBar, Heading} from './styles'

export const App = () => {
  return (
    <div>
        <Container maxwidth='lg'>
          <AppBar>
            <Heading>Memories</Heading>
            <Image src={memories} alt="memories" height='60'/>
          </AppBar>
          <Grow in>
            <Container> 
              <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
    </div>
  )
}
