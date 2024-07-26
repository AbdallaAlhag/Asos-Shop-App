import { Link } from "react-router-dom";
import GlobalStyle from "../../style/GlobalStyles";
import { Button } from "../../style/CommonComponents";
import Header from "../../Components/Header";

function Men() {
  return <>
  <div className="Container">
      <GlobalStyle/>
        <Header>
            
        </Header>
      <Button>
          <Link to="/Women">Shop for Women</Link>
      </Button>
  </div>
  </>;
}

export default Men;

