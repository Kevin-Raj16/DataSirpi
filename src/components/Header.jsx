function Header({ title, company }) {

    return (

        <header className="header">

            <div>

                <h1>{title}</h1>

                <p>{company}</p>

            </div>

        </header>

    );

}

export default Header;
