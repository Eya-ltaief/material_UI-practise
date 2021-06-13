import React from 'react'
import { Typography, AppBar, CardActions , CardContent, CardMedia, CssBaseline, Grid, Container , Toolbar, Button, Card} from '@material-ui/core'
//Typography is just  text h1 h2 .. by setting h1 ..h6 to variant
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import useStyle from './styles';
const cards= [1,2,3,4,5,6,7,8,9,10,11,12] // number of cards used
const LandingPage = () => {
    const classes = useStyle()      
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar className={classes.text}>
                    <PhotoCameraIcon className={classes.Container}/>
                    <Typography variant="h6" >Photo album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm" className={classes.Container}>
                        <Typography variant="h2" align="center" color="textPrimary">Material UI practise</Typography>
                        <Typography variant="h6" align="center" color="textPrimary">hello there just truying the line length and how it looks like on the screen  </Typography>
                        <div className={classes.Button}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary"> see my photos </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="secondary" > secondary action </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.CardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card)=>(
                            <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.Card}>
                                <CardMedia className={classes.CardMedia} image='https://source.unsplash.com/random' title="image title" />
                                <CardContent className={classes.CardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>   
                                    <Typography>
                                        This is a media card
                                    </Typography>                             
                                </CardContent>
                                <CardActions className={classes.Buttons}>
                                    <Button size="small" color="primary">view</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>                            
                            </Card>
                            </Grid>
                        ))}
                        
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

export default LandingPage
