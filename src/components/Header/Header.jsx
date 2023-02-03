import React from 'react'
import {useState} from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBed, faCab, faGamepad, faSpa, faWater, faCalendarDay, faPerson } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'


const Header = () => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room: 1,
    })
    return (
        <div class="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active ">
                        <FontAwesomeIcon icon={faBed} /><span>Stay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCab} /><span>Car</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBars} /><span>Bar</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faSpa} /><span>Spa</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faGamepad} /><span>Game</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faWater} /><span>Beach</span>
                    </div>
                </div>
                <h1 className="headerTitle">A lifetime of discount, its a genius</h1>
                <p className="headerDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nihil fuga vero, maiores iste ullam sapiente asperiores quae est suscipit, dolores tenetur aliquid architecto impedit?</p>
                <button className="headerBtn">Singn in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM,dd,yyyy")} to ${format(date[0].endDate, "MM,dd,yyyy")} `}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">{`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}</span>
                        <div className="options">
                            <div className="optionsItem">
                                <span className="optionsText">
                                    Adult
                                </span>
                                <button className="optionCounterBtn">+</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterBtn">-</button>
                            </div>
                            <div className="optionsItem">
                                <span className="optionsText">
                                    Children
                                </span>
                                <button className="optionCounterBtn">+</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterBtn">-</button>
                            </div>
                            <div className="optionsItem">
                                <span className="optionsText">
                                    Room
                                </span>
                                <button className="optionCounterBtn">+</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterBtn">-</button>
                            </div>
                        </div>
                    </div>
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header
