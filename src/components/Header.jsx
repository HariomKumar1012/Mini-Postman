
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    logo: {
        width: 100,
        padding: 15,
        paddingBottom: 50
    },
    navbar: {
        background: ['#000', '!important'],
        position: ['static', '!important'],
        height: [50, '!important']
    }
})

const Header = () => {
    const classes = useStyles();
    const logo = 'https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png';

    return (
        <>
            <img src={logo} alt="logo" className={classes.logo} />
            {/* <AppBar className={classes.navbar}>
                <Toolbar>
                </Toolbar>
            </AppBar> */}
        </>
    )
}

export default Header;