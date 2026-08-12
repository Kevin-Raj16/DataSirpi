/**
 * Footer Component
 */

function Footer({

    company,

    year

}) {

    return (

        <footer className="footer">

            <h3>

                {company}

            </h3>

            <p>

                © {year}

            </p>

        </footer>

    );

}

export default Footer;
