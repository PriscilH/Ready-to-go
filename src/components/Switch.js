import { useState } from "react";

const Switch = () => {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);

    let buttonReady = "No way !";

    if (switch1 && switch2 && switch3) {
        buttonReady = "Go !";
    }

    return (
        <div>
            <div className="Button1">
        <button className="Switch1"
        onClick={() => {
            setSwitch1(true);
          }}
          style={{ backgroundColor: switch1 ? "#5C48D3" : "#FFF",
        color: switch1 ? "#FFF" : "#5C48D3",}}
        >
          ON
        </button>
        <button className="Setswitch1"
        onClick={() => {
            setSwitch1(false);
          }}
          style={{ backgroundColor: switch1 ? "#FFF" : "#5C48D3",
        color: switch1 ? "#5C48D3" : "#FFF",}}
        >
          OFF
        </button>  
        </div>
        <div className="Button2">
        <button className="Switch2"
        onClick={() => {
            setSwitch2(true);
          }}
          style={{ backgroundColor: switch2 ? "#5C48D3" : "#FFF",
        color: switch2 ? "#FFF" : "#5C48D3",}}
        >
          ON
        </button>
        <button className="Setswitch2"
        onClick={() => {
            setSwitch2(false);
          }}
          style={{ backgroundColor: switch2 ? "#FFF" : "#5C48D3",
        color: switch2 ? "#5C48D3" : "#FFF",}}
        >
          OFF
        </button>  
        </div>
        <div className="Button3">
        <button className="Switch3"
        onClick={() => {
            setSwitch3(true);
          }}
          style={{ backgroundColor: switch3 ? "#5C48D3" : "#FFF",
        color: switch3 ? "#FFF" : "#5C48D3",}}
        >
          ON
        </button>
        <button className="Setswitch3"
        onClick={() => {
            setSwitch3(false);
          }}
          style={{ backgroundColor: switch3 ? "#FFF" : "#5C48D3",
        color: switch3 ? "#5C48D3" : "#FFF",}}
        >
          OFF
        </button> </div>
        <div className="ButtonGo" >
        
        <div className="Go"
        style={{ backgroundColor: buttonReady === "No way !" ? "#D34848" : "#46AC4A"}}>
            {buttonReady}
        </div>
        </div>
        </div>
    );
};

export default Switch;