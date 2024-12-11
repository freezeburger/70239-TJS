
/**
 * Balise sectionnante.
 * div
 * body*
 * header
 * footer
 * main*
 * section*
 * article*
 * aside*
 */

import React from "react";

const styles = {
    display:'block',
    backgroundColor: 'black',
    color: 'white',
    height:'50px',
    textAlign:'center',
    lineHeight:'50px',
    position:'fixed',
    bottom:'0',
    width:'100%',
}

class Footer extends React.Component {
    render() {
        return (
            <footer style={styles}>
                Application Footer
            </footer>
        )
    }
}

export default Footer;