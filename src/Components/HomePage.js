import React from "react";
import "./HomePage.css";
import img from "./Backgroundimg/backgroundimg.png";
import Header from "../Components/usernamePAge";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { INCREMENTBACKGROUNDNULL,TOGGLELEFT } from "./Redux/actions/indux";
const { forwardRef, useRef, useImperativeHandle } = React;
const Home = forwardRef((props, ref) => {
  const [Count, setCount] = useState(null);
  const dispatch = useDispatch();
  function HandleHoverEffect() {
    props.SetHoverEffect(null);
    setCount(Count+1)
    dispatch(INCREMENTBACKGROUNDNULL());
  }
  useImperativeHandle(ref, () => ({
    getAlert() {
        props.SetHoverEffect(null);
        setCount(Count+1)
        dispatch(INCREMENTBACKGROUNDNULL());
    }
  }));
  return (
    <div className="outerContainter">
      <div
        className="InnerContainer"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${img})`,
        }}
      >
        <Header button={props.HandleSetHoverEffect} data={Count} />
        <div className="outerWraperTwoSections">
          {props.ToggleAddNewSectionLeft ? (
             <div className="SectionRight">
             {props.Array && props.Array.filter((Section) => Section.Left === true).map(
                 (item, index) => {
                   return <div
                   key={index}
                   >{item.section}</div>;
                 }
               )}
           </div>
          ) : (
            <div className="FirstSection"
            onClick={()=>{
              props.setToggleAddNewSection(true)
              dispatch(TOGGLELEFT(true));
            }}
            >
              <div className="AddnewSection"
              >Add new section</div>
            </div>
          )}
          {props.ToggleAddNewSectionRight ? (
            <div className="SectionLeft">
              {props.Array && props.Array.filter((Section) => Section.Left === false).map(
                  (item, index) => {
                    return <div
                    key={index}
                    >{item.section}</div>;
                  }
                )}
            </div>
          ) : (
            <div className="SecondSection"
            onClick={()=>{
              props.setToggleAddNewSection(true)
            }}
            >
              <div className="AddnewSection"
              >Add new section</div>
            </div>
          )}
        </div>
        <div className="OuterWraperSection"></div>
        <div
          onClick={HandleHoverEffect}
          style={{
            position: "absolute",
            backgroundColor: props.HoverEffect,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 0,
          }}
        ></div>
      </div>
    </div>
);
});
export default Home