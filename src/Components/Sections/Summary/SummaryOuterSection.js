import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../../Context/Context';
import SummaryInnerSection from './SummaryInnerSection';
import {Rings} from 'react-loader-spinner';
import InputField from '../../InputField';
import {Plus, Delete, Template} from '../../JasonData';
export default function SummaryOuterSection (props) {
  const contextData = useContext (Context);
  const [HighLighter, setHighLighter] = useState (false);
  const [array, setState] = useState ([
    {
      selected: false,
      toggleSwitch: [{name: 'Show Bullets', selected: true}],
      value: {
        title: '',
      },
    },
  ]);
  const [ToggleArrowDown, setToggleArrowDown] = useState (true);
  const [ToggleArrowUp, setToggleArrowUp] = useState (true);
  const [DisplayLoader, setDisplayLoader] = useState (false);
  const [ValueFindMeMeOnline, setValueFindMeMeOnline] = useState ('');

  function GetItemFindMeOnline () {
    let value = localStorage.getItem ('Summary');
    value = JSON.parse (value);
    return value;
  }

  function handleInnerHight () {
    let temp = GetItemFindMeOnline ();
    if (temp === null || temp == undefined) {
      temp = array;
    }
    temp.map ((item, index) => {
      temp[index].selected = false;
    });
    setState ([...temp]);
  }

  function HandleCompleteBoarderSelected () {
    setHighLighter (true);
    handleInnerHight ();
  }

  function IsActive (IsActive) {
    if (IsActive) {
      setToggleArrowDown (IsActive);
    } else {
      setToggleArrowDown (IsActive);
    }
  }
  function IsActiveUp (IsActive) {
    if (IsActive) {
      setToggleArrowUp (IsActive);
    } else {
      setToggleArrowUp (IsActive);
    }
  }

  function HandlerAddItemInArray () {
    setHighLighter (false);
    if (array.length <= 4) {
      if (array === [] || array.length === 0) {
        setToggleArrowDown (false);
        setToggleArrowUp (false);
      } else {
        setToggleArrowDown (false);
        setToggleArrowUp (true);
      }
      array.push ({
        selected: false,
        toggleSwitch: [{name: 'Show Bullets', selected: true}],
        value: {
          title: '',
        },
      });
      array.map ((item, index) => {
        item.selected = false;
      });
      let index = array.length - 1;
      array[index].selected = true;
      setState ([...array]);
      localStorage.setItem ('Summary', JSON.stringify (array));
    } else {
      contextData.HandleBackGroundColorOfModal (true);
      contextData.HandleDisplayDropDownAlertMessage (true);
    }
  }

  function DeleteOneItemInArray (index) {
    array.splice (index, 1);
    setState ([...array]);
    localStorage.setItem ('Summary', JSON.stringify (array));
    setDisplayLoader (true);
  }

  useEffect (() => {
    let SummaryValue = localStorage.getItem ('Summary');
    SummaryValue = JSON.parse (SummaryValue);
    if (SummaryValue !== null) {
      setState ([...SummaryValue]);
    }
    let value = localStorage.getItem ('HeadingValueSummary');
    value = JSON.parse (value);
    if (value === null || value === undefined) {
      value = '';
    }
    setValueFindMeMeOnline (value);
  }, []);
  useEffect (
    () => {
      alertUser ();
    },
    [contextData.UpdateBachGroundHighLitter]
  );

  function alertUser () {
    setHighLighter (false);
    handleInnerHight ();
  }

  useEffect (
    () => {
      if (contextData.BackGroundHighLitter !== 'Summary') {
        setHighLighter (false);
        handleInnerHight ();
      }
    },
    [contextData.BackGroundHighLitter]
  );

  useEffect (
    () => {
      const timer = setTimeout (() => {
        setDisplayLoader (false);
      }, 1000);
      return () => clearTimeout (timer);
    },
    [DisplayLoader]
  );

  function handleInputData (data) {
    if (data.name === 'Summary') {
      setValueFindMeMeOnline (data.value);
    }
    localStorage.setItem ('HeadingValueSummary', JSON.stringify (data.value));
  }

  useEffect (
    () => {
      if (contextData.AddSectionName === 'SummaryOuterSection') {
        localStorage.setItem ('Summary', JSON.stringify (array));
        contextData.HandleAddSectionName (null);
      }
    },
    [contextData.AddSectionName]
  );

  return (
    <div>
      <div
        className="outerWrapperCompleteBox"
        style={{backgroundColor: HighLighter ? 'white' : ''}}
        onClick={e => {
          props.setDisplayBackGroundColor (true);
          props.HandleBackGroundColor (e);
          contextData.HandleUpdateBackGroundHighLitter ('Summary');
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center bg-danger"
          style={{position: 'relative'}}
        >
          {HighLighter &&
            <div className="headingOptionBoxRight d-flex CommonCssClassAbsolutePosition">
              <div
                onClick={HandlerAddItemInArray}
                className="d-flex  align-items-center outerWrapperPlusAndNewEntry CommonCssClassCursorPointer"
              >
                <Plus className="newEntryPlusIcon CommonCssClassCursorPointer" />
                <div className="newEntryText">New Entry</div>
              </div>
              <div className="outerWrapperHeaderIcons">
                <Delete
                  onClick={() => {
                    props.HandleRemoveElement ('SummaryOuterSection');
                    contextData.HandleRemoveElement ('SummaryOuterSection');
                  }}
                  className="DeleteIcon CommonCssClassCursorPointer"
                />
              </div>
              <div
                className="outerWrapperHeaderIcons"
                style={{border: 'unset'}}
                onClick={() => {
                  props.HandleState (false);
                }}
              >
                <Template className="DeleteIcon ArrangeIcon CommonCssClassCursorPointer" />
              </div>
            </div>}
        </div>
        <div
          style={{backgroundColor: HighLighter ? 'white' : '', width: '100%'}}
          className="HeadingNameBox BorderRadius"
          onClick={HandleCompleteBoarderSelected}
        >
          <InputField
            placeHolder={'SUMMARY'}
            otherStyle={'SectionHeaderTextHolder'}
            value={ValueFindMeMeOnline}
            index={0}
            name={'Summary'}
            handleInputData={handleInputData}
            useUpperCase={false}
            UpperCaseHeaderInputField={false}
          />
        </div>
        {DisplayLoader
          ? <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: 'rgba(0, 0, 0, 0.712)',
              }}
            >
              <Rings color="white" height={180} width={180} />
            </div>
          : <div>
              {array &&
                array.map ((item, index) => {
                  let display_dashesLine = true;
                  if (array.length - 1 === index) {
                    display_dashesLine = false;
                  }
                  return (
                    <div key={index}>
                      <SummaryInnerSection
                        item={item}
                        IsActive={IsActive}
                        IsActiveUp={IsActiveUp}
                        ToggleArrowDown={ToggleArrowDown}
                        ToggleArrowUp={ToggleArrowUp}
                        index={index}
                        list={array}
                        setList={setState}
                        HandlerAddItemInArray={HandlerAddItemInArray}
                        DeleteOneItemInArray={DeleteOneItemInArray}
                        setHighLighter={setHighLighter}
                        display_dashesLine={display_dashesLine}
                      />
                    </div>
                  );
                })}
            </div>}
      </div>
    </div>
  );
}
