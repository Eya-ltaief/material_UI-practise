import { makeStyles } from '@material-ui/core';
const useStyle =makeStyles((theme)=>({
    container:{
        backgroundColor:theme.palette.background.paper,
        padding: theme.spacing(8,0,6)
    },
    icon :{
        marginRight:'20px',
    },
    text:{
        marginLeft:"45%"
    },
    Buttons :{
        marginTop:'40px'
    },
    CardGrid:{
        padding:"20px 0"
    },
    Card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    CardMedia:{
        paddingTop: '70%'
    },
    CardContent:{
        flexGrow:1
    }
}))

export default useStyle