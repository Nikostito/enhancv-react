import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgArrangeFront } from "react-icons/cg";
import Boxfunction from "./LanguageBox";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT , INCREMENTBACKGROUNDCOLORLANGUAGE } from "./Redux/actions/indux";
export default function Language(props) {
  const [ShowHeaderButton, setShowHeaderButton] = useState("none");
  const [backgroundColor, setbackgroundColor] = useState(null);
  const [array, setState] = useState([]);
  const [borderBottm, setborderBottm] = useState("none");
  const [UpdateState, setUpdateState] = useState(0);
  const [ToggleArrowDown, setToggleArrowDown] = useState(true);
  const [ToggleArrowUp, setToggleArrowUp] = useState(true);
  const dispatch = useDispatch();
  const CounterData = useSelector((state) => state.CounterData);
  const nullBackgroundcolorPassion = useSelector((state) => state.IncrementBackgroundColorPassion);
  const nullBackgroundcolorTraining = useSelector((state) => state.IncrementBackgroundColorTraining);
  const nullBackgroundcolorExperience = useSelector((state) => state.IncrementBackgroundColorExperience);
  const nullBackgroundcolorAchievement = useSelector((state) => state.IncrementBackgroundColorAchievement);
  const nullBackgroundcolorSkill = useSelector((state) => state.IncrementBackgroundColorSkill);
  const nullBackgroundcolorProject = useSelector((state) => state.IncrementBackgroundColorProject);
  const nullBackgroundcolorMyTime = useSelector((state) => state.IncrementBackgroundColorMyTime);
  const nullBackgroundcolorFindMeOnline = useSelector((state) => state.IncrementBackgroundColorFindMeOnline);
  const nullBackgroundcolorSummary = useSelector((state) => state.IncrementBackgroundColorSummary);
  const nullBackgroundcolorStrength = useSelector((state) => state.IncrementBackgroundColorStrength);
  const nullBackgroundcolorVolunteering = useSelector((state) => state.IncrementBackgroundColorVolunteering);
  const nullBackgroundcolorEducation = useSelector((state) => state.IncrementBackgroundColorEducation);
  const nullBackgroundcolorIndustryExperience = useSelector((state) => state.IncrementBackgroundColorIndusteryExperience);
  const Incrementnull = useSelector((state) => state.IncrementNull);
  function HandleCompleteBoarderSelected() {
    dispatch(INCREMENTBACKGROUNDCOLORLANGUAGE());
    props.button();
    setbackgroundColor("white");
    setShowHeaderButton("flex");
    setborderBottm("1px dashed rgba(0, 0, 0, 0.548)");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }
  function HandleCompleteBoarderUnSelected() {
    setbackgroundColor(null);
    setShowHeaderButton("none");
  }
  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorPassion]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorTraining]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorExperience]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorAchievement]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorSkill]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorProject]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorMyTime]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorFindMeOnline]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorSummary]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorStrength]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorVolunteering]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorEducation]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
    let temp = array;
    array.map((item, index) => {
      temp[index].selected = false;
    });
    setState([...temp]);
  }, [nullBackgroundcolorIndustryExperience]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
  }, [Incrementnull]);

  useEffect(() => {
    setbackgroundColor(null);
    setborderBottm("none");
    setShowHeaderButton("none");
  }, [CounterData]);

  function HandlerAddItemInArray() {
    array.push({
      selected: false,
      toggleButton: { showSlider: true, showProficiency: true },
      togglebuttonlist: [
        { name: "Show Slider", selectedToggleButton: true },
        { name: "Show Proficiency", selectedToggleButton: true },
      ],
      value: {
        LanguageTextholder: "",
        proficiencyTextHolder: "",
        SliderValueTextHolder: "",
      },
    });
    setState([...array]);
    localStorage.setItem("arrayLanguage", JSON.stringify(array));
  }
  function HanderDeleteItemInArray() {
    array.pop({
      selected: false,
      toggleButton: { showSlider: true, showProficiency: true },
      togglebuttonlist: [
        { name: "Show Slider", selectedToggleButton: true },
        { name: "Show Proficiency", selectedToggleButton: true },
      ],
      value: {
        LanguageTextholder: "",
        proficiencyTextHolder: "",
      },
    });
    setState([...array]);
    localStorage.setItem("arrayLanguage", JSON.stringify(array));
  }
  useEffect(() => {
    if (localStorage.getItem("arrayLanguage") !== null) {
      let value = localStorage.getItem("arrayLanguage");
      setState(JSON.parse(value));
    }
  }, []);
  function IsActive(Isactive) {
    if (Isactive) {
      setToggleArrowDown(Isactive);
    } else {
      setToggleArrowDown(Isactive);
    }
  }
  function IsActiveUp(Isactive) {
    if (Isactive) {
      setToggleArrowUp(Isactive);
    } else {
      setToggleArrowUp(Isactive);
    }
  }

  return (
    <>
      <div
        className="outerWraperCompleteBox"
        style={{ backgroundColor: backgroundColor }}
        onClick={() => {}}
      >
        <div
          style={{ backgroundColor: backgroundColor }}
          className="HeadingNameBox"
          onClick={HandleCompleteBoarderSelected}
        >
          <input
           type="text"
            className="TexrHolderexperience"
            style={{ borderBottom: "4px solid" }}
            placeholder="LANGUAGE"
            onClick={() => {
              setUpdateState(UpdateState + 1);
              dispatch(INCREMENT());
            }}
          />
          <div
            style={{ display: ShowHeaderButton }}
            className="headingOptionBoxEducation"
          >
            <div
              onClick={HandlerAddItemInArray}
              className="outerWraperPlusAndNewEntry"
            >
              <FaPlus className="newEntryPlusIcon" />
              <div className="newEntryText">New Entry</div>
            </div>
            <RiDeleteBin6Line
              onClick={HanderDeleteItemInArray}
              className="DeleteIcon"
            />
            <CgArrangeFront className="ArrangeIcon" />
          </div>
        </div>
        {array &&
          array.map((item, index) => {
            return (
              <Boxfunction
                key={index}
                UpdateState={UpdateState}
                HeaderButton={"flex"}
                data={props.data}
                borderbotm={borderBottm}
                button={props.button}
                item={item}
                IsActive={IsActive}
                IsActiveUp={IsActiveUp}
                ToggleArrowDown={ToggleArrowDown}
                ToggleArrowUp={ToggleArrowUp}
                index={index}
                list={array}
                setList={setState}
                HandleCompleteBoarderUnSelected={
                  HandleCompleteBoarderUnSelected
                }
                HandlerAddItemInArrayfun={HandlerAddItemInArray}
                HanderDeleteItemInArrayfun={HanderDeleteItemInArray}
              />
            );
          })}
      </div>
    </>
  );
}
