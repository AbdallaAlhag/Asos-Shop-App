/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import GlobalStyle from "../../style/GlobalStyles";
import { Button} from '../../style/CommonComponents';

function Women() {
  const [count, setCount] = useState(0);

  return (
      <div className="Container">
        <GlobalStyle/>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Button>
            <Link to="/">Shop for Men</Link>
          </Button>
        </div>
      </div>
  );
}

export default Women;
