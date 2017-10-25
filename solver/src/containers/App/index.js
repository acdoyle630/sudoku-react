import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import stringify from 'jsx-stringify';
import logo from './logo.svg';
import './styles.css';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      row_0_cell_0 : null,
      row_0_cell_1 : null,
      row_0_cell_2 : null,
      row_0_cell_3 : null,
      row_0_cell_4 : null,
      row_0_cell_5 : null,
      row_0_cell_6 : null,
      row_0_cell_7 : null,
      row_0_cell_8 : null,
      row_1_cell_0 : null,
      row_1_cell_1 : null,
      row_1_cell_2 : null,
      row_1_cell_3 : null,
      row_1_cell_4 : null,
      row_1_cell_5 : null,
      row_1_cell_6 : null,
      row_1_cell_7 : null,
      row_1_cell_8 : null,
      row_2_cell_0 : null,
      row_2_cell_1 : null,
      row_2_cell_2 : null,
      row_2_cell_3 : null,
      row_2_cell_4 : null,
      row_2_cell_5 : null,
      row_2_cell_6 : null,
      row_2_cell_7 : null,
      row_2_cell_8 : null,
      row_3_cell_0 : null,
      row_3_cell_1 : null,
      row_3_cell_2 : null,
      row_3_cell_3 : null,
      row_3_cell_4 : null,
      row_3_cell_5 : null,
      row_3_cell_6 : null,
      row_3_cell_7 : null,
      row_3_cell_8 : null,
      row_4_cell_0 : null,
      row_4_cell_1 : null,
      row_4_cell_2 : null,
      row_4_cell_3 : null,
      row_4_cell_4 : null,
      row_4_cell_5 : null,
      row_4_cell_6 : null,
      row_4_cell_7 : null,
      row_4_cell_8 : null,
      row_5_cell_0 : null,
      row_5_cell_1 : null,
      row_5_cell_2 : null,
      row_5_cell_3 : null,
      row_5_cell_4 : null,
      row_5_cell_5 : null,
      row_5_cell_6 : null,
      row_5_cell_7 : null,
      row_5_cell_8 : null,
      row_6_cell_0 : null,
      row_6_cell_1 : null,
      row_6_cell_2 : null,
      row_6_cell_3 : null,
      row_6_cell_4 : null,
      row_6_cell_5 : null,
      row_6_cell_6 : null,
      row_6_cell_7 : null,
      row_6_cell_8 : null,
      row_7_cell_0 : null,
      row_7_cell_1 : null,
      row_7_cell_2 : null,
      row_7_cell_3 : null,
      row_7_cell_4 : null,
      row_7_cell_5 : null,
      row_7_cell_6 : null,
      row_7_cell_7 : null,
      row_7_cell_8 : null,
      row_8_cell_0 : null,
      row_8_cell_1 : null,
      row_8_cell_2 : null,
      row_8_cell_3 : null,
      row_8_cell_4 : null,
      row_8_cell_5 : null,
      row_8_cell_6 : null,
      row_8_cell_7 : null,
      row_8_cell_8 : null,
    };
  }

  changeContent00 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_0 : Number(event.target.value)
    })
  }

  changeContent01 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_1 : Number(event.target.value)
    })
  }

  changeContent02 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_2 : Number(event.target.value)
    })
  }

  changeContent03 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_3 : Number(event.target.value)
    })
  }

  changeContent04 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_4 : Number(event.target.value)
    })
  }

  changeContent05 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_5 : Number(event.target.value)
    })
  }

  changeContent06 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_6 : Number(event.target.value)
    })
  }

  changeContent07 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_7 : Number(event.target.value)
    })
  }

  changeContent08 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_0_cell_8 : Number(event.target.value)
    })
  }

    changeContent10 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_0 : Number(event.target.value)
    })
  }

  changeContent11 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_1 : Number(event.target.value)
    })
  }

  changeContent12 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_2 : Number(event.target.value)
    })
  }

  changeContent13 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_3 : Number(event.target.value)
    })
  }

  changeContent14 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_4 : Number(event.target.value)
    })
  }

  changeContent15 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_5 : Number(event.target.value)
    })
  }

  changeContent16 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_6 : Number(event.target.value)
    })
  }

  changeContent17 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_7 : Number(event.target.value)
    })
  }

  changeContent18 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_1_cell_8 : Number(event.target.value)
    })
  }

  changeContent20 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_0 : Number(event.target.value)
    })
  }

  changeContent21 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_1 : Number(event.target.value)
    })
  }

  changeContent22 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_2 : Number(event.target.value)
    })
  }

  changeContent23 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_3 : Number(event.target.value)
    })
  }

  changeContent24 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_4 : Number(event.target.value)
    })
  }

  changeContent25 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_5 : Number(event.target.value)
    })
  }

  changeContent26 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_6 : Number(event.target.value)
    })
  }

  changeContent27 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_7 : Number(event.target.value)
    })
  }

  changeContent28 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_2_cell_8 : Number(event.target.value)
    })
  }

    changeContent30 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_0 : Number(event.target.value)
    })
  }

  changeContent31 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_1 : Number(event.target.value)
    })
  }

  changeContent32 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_2 : Number(event.target.value)
    })
  }

  changeContent33 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_3 : Number(event.target.value)
    })
  }

  changeContent34 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_4 : Number(event.target.value)
    })
  }

  changeContent35 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_5 : Number(event.target.value)
    })
  }

  changeContent36 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_6 : Number(event.target.value)
    })
  }

  changeContent37 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_7 : Number(event.target.value)
    })
  }

  changeContent38 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_3_cell_8 : Number(event.target.value)
    })
  }

  changeContent40 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_0 : Number(event.target.value)
    })
  }

  changeContent41 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_1 : Number(event.target.value)
    })
  }

  changeContent42 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_2 : Number(event.target.value)
    })
  }

  changeContent43 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_3 : Number(event.target.value)
    })
  }

  changeContent44 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_4 : Number(event.target.value)
    })
  }

  changeContent45 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_5 : Number(event.target.value)
    })
  }

  changeContent46 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_6 : Number(event.target.value)
    })
  }

  changeContent47 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_7 : Number(event.target.value)
    })
  }

  changeContent48 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_4_cell_8 : Number(event.target.value)
    })
  }

    changeContent50 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_0 : Number(event.target.value)
    })
  }

  changeContent51 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_1 : Number(event.target.value)
    })
  }

  changeContent52 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_2 : Number(event.target.value)
    })
  }

  changeContent53 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_3 : Number(event.target.value)
    })
  }

  changeContent54 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_4 : Number(event.target.value)
    })
  }

  changeContent55 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_5 : Number(event.target.value)
    })
  }

  changeContent56 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_6 : Number(event.target.value)
    })
  }

  changeContent57 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_7 : Number(event.target.value)
    })
  }

  changeContent58 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_5_cell_8 : Number(event.target.value)
    })
  }

  changeContent60 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_0 : Number(event.target.value)
    })
  }

  changeContent61 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_1 : Number(event.target.value)
    })
  }

  changeContent62 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_2 : Number(event.target.value)
    })
  }

  changeContent63 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_3 : Number(event.target.value)
    })
  }

  changeContent64 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_4 : Number(event.target.value)
    })
  }

  changeContent65 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_5 : Number(event.target.value)
    })
  }

  changeContent66 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_6 : Number(event.target.value)
    })
  }

  changeContent67 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_7 : Number(event.target.value)
    })
  }

  changeContent68 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_6_cell_8 : Number(event.target.value)
    })
  }

    changeContent70 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_0 : Number(event.target.value)
    })
  }

  changeContent71 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_1 : Number(event.target.value)
    })
  }

  changeContent72 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_2 : Number(event.target.value)
    })
  }

  changeContent73 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_3 : Number(event.target.value)
    })
  }

  changeContent74 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_4 : Number(event.target.value)
    })
  }

  changeContent75 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_5 : Number(event.target.value)
    })
  }

  changeContent76 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_6 : Number(event.target.value)
    })
  }

  changeContent77 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_7 : Number(event.target.value)
    })
  }

  changeContent78 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_7_cell_8 : Number(event.target.value)
    })
  }

   changeContent80 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_0 : Number(event.target.value)
    })
  }

  changeContent81 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_1 : Number(event.target.value)
    })
  }

  changeContent82 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_2 : Number(event.target.value)
    })
  }

  changeContent83 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_3 : Number(event.target.value)
    })
  }

  changeContent84 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_4 : Number(event.target.value)
    })
  }

  changeContent85 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_5 : Number(event.target.value)
    })
  }

  changeContent86 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_6 : Number(event.target.value)
    })
  }

  changeContent87 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_7 : Number(event.target.value)
    })
  }

  changeContent88 = (event, cell) => {
    event.preventDefault()
    this.setState({
      row_8_cell_8 : Number(event.target.value)
    })
  }



  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sudoku Solver</h1>
        </header>
        <p>
          Fill in your puzzle.
        </p>
        <div id="puzzle">
          <div className="row">
            <div className="cell" id="row_0_cell_0" className="sectionOneTopLeft">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="row_0_cell_1" className = "sectionOneTop">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_1"
                value = {this.state.row_0_cell_1}
                onChange ={this.changeContent01}
                />
            </div>
            <div className="cell" id="row_0_cell_2" className="sectionOneTopRight" >
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_2"
                value = {this.state.row_0_cell_2}
                onChange ={this.changeContent02}
                />
            </div>
            <div className="cell" id="row_0_cell_3" className="sectionTwoTopLeft">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_3"
                value = {this.state.row_0_cell_3}
                onChange ={this.changeContent03}
                />
            </div>
            <div className="cell" id="row_0_cell_4" className="sectionTwoTop">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_4"
                value = {this.state.row_0_cell_4}
                onChange ={this.changeContent04}
                />
            </div>
            <div className="cell" id="row_0_cell_5" className="sectionTwoTopRight">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_5"
                value = {this.state.row_0_cell_5}
                onChange ={this.changeContent05}
                />
            </div>
            <div className="cell" id="row_0_cell_6" className="sectionThreeTopLeft">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_6"
                value = {this.state.row_0_cell_6}
                onChange ={this.changeContent06}
                />
            </div>
            <div className="cell" id="row_0_cell_7" className="sectionThreeTop">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_7"
                value = {this.state.row_0_cell_7}
                onChange ={this.changeContent07}
                />
            </div>
            <div className="cell" id="row_0_cell_8" className="sectionThreeTopRight">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_8"
                value = {this.state.row_0_cell_8}
                onChange ={this.changeContent08}
                />
            </div>
          </div>
          <div className="row">
            <div className="sectionOneLeft" id="row_1_cell_0">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_0"
                value = {this.state.row_1_cell_0}
                onChange ={this.changeContent10}
                />
            </div>
            <div className="cell" id="row_1_cell_1">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_1"
                value = {this.state.row_1_cell_1}
                onChange ={this.changeContent11}
                />
            </div>
            <div className="sectionOneRight" id="row_1_cell_2">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_2"
                value = {this.state.row_1_cell_2}
                onChange ={this.changeContent12}
                />
            </div>
            <div className="sectionTwoLeft" >
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_3"
                value = {this.state.row_1_cell_3}
                onChange ={this.changeContent13}
                />
            </div>
            <div className="cell" id="row_1_cell_4">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_4"
                value = {this.state.row_1_cell_4}
                onChange ={this.changeContent14}
                />
            </div>
            <div className="sectionTwoRight" id="row_1_cell_5">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_5"
                value = {this.state.row_1_cell_5}
                onChange ={this.changeContent15}
                />
            </div>
            <div className="sectionThreeLeft" id="row_1_cell_6">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_6"
                value = {this.state.row_1_cell_6}
                onChange ={this.changeContent16}
                />
            </div>
            <div className="cell" id="row_1_cell_7">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_7"
                value = {this.state.row_1_cell_7}
                onChange ={this.changeContent17}
                />
            </div>
            <div className="sectionThreeRight" id="row_1_cell_8">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_1_cell_8"
                value = {this.state.row_1_cell_8}
                onChange ={this.changeContent18}
                />
            </div>
          </div>
          <div className="row">
            <div className="sectionOneBottomLeft" id="row_2_cell_0">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_0"
                value = {this.state.row_2_cell_0}
                onChange ={this.changeContent20}
                />
            </div>
            <div className="sectionOneBottom" id="row_2_cell_1">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_1"
                value = {this.state.row_2_cell_1}
                onChange ={this.changeContent21}
                />
            </div>
            <div className="sectionOneBottomRight" id="row_2_cell_2">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_2"
                value = {this.state.row_2_cell_2}
                onChange ={this.changeContent22}
                />
            </div>
            <div className="sectionTwoBottomLeft" id="row_2_cell_3">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_3"
                value = {this.state.row_2_cell_3}
                onChange ={this.changeContent23}
                />
            </div>
            <div className="sectionTwoBottom" id="row_2_cell_4">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_4"
                value = {this.state.row_2_cell_4}
                onChange ={this.changeContent24}
                />
            </div>
            <div className="sectionTwoBottomRight" id="row_2_cell_5">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_5"
                value = {this.state.row_2_cell_5}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="sectionThreeBottomLeft" id="row_2_cell_6">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_6"
                value = {this.state.row_2_cell_6}
                onChange ={this.changeContent26}
                />
            </div>
            <div className="sectionThreeBottom" id="row_2_cell_7">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_7"
                value = {this.state.row_2_cell_7}
                onChange ={this.changeContent27}
                />
            </div>
            <div className="sectionThreeBottomRight" id="row_2_cell_8">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_2_cell_8"
                value = {this.state.row_2_cell_8}
                onChange ={this.changeContent28}
                />
            </div>
          </div>
          <div className="row">
              <div className="sectionFourTopLeft" id="30">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_0}
                  onChange ={this.changeContent30}
                  />
              </div>
              <div className="sectionFourTop" id="31">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_1}
                  onChange ={this.changeContent31}
                  />
              </div>
              <div className="sectionFourTopRight" id="32">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_2}
                  onChange ={this.changeContent32}
                  />
              </div>
              <div className="sectionFiveTopLeft" id="33">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_3}
                  onChange ={this.changeContent33}
                  />
              </div>
              <div className="sectionFiveTop" id="34">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_4}
                  onChange ={this.changeContent34}
                  />
              </div>
              <div className="sectionFiveTopRight" id="35">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_5}
                  onChange ={this.changeContent35}
                  />
              </div>
              <div className="sectionSixTopLeft" id="36">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_6}
                  onChange ={this.changeContent36}
                  />
              </div>
              <div className="sectionSixTop" id="37">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_7}
                  onChange ={this.changeContent37}
                  />
              </div>
              <div className="sectionSixTopRight" id="38">
                <input
                  type = "number"
                  min = "1"
                  max = "9"
                  cell = "row_0_cell_0"
                  value = {this.state.row_3_cell_8}
                  onChange ={this.changeContent38}
                  />
            </div>
          </div>
          <div className="row">
            <div className="sectionFourLeft" id="40">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_0}
                onChange ={this.changeContent40}
                />
            </div>
            <div className="cell" id="41">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_1}
                onChange ={this.changeContent41}
                />
            </div>
            <div className="sectionFourRight" id="42">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_2}
                onChange ={this.changeContent42}
                />
            </div>
            <div className="sectionFiveLeft" id="43">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_3}
                onChange ={this.changeContent43}
                />
            </div>
            <div className="cell" id="44">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_4}
                onChange ={this.changeContent44}
                />
            </div>
            <div className="sectionFiveRight" id="45">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_5}
                onChange ={this.changeContent45}
                />
            </div>
            <div className="sectionSixLeft" id="46">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_6}
                onChange ={this.changeContent46}
                />
            </div>
            <div className="cell" id="47">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_7}
                onChange ={this.changeContent47}
                />
            </div>
            <div className="sectionSixRight" id="48">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_4_cell_8}
                onChange ={this.changeContent48}
                />
            </div>
          </div>
          <div className="row">
            <div className="sectionFourBottomLeft" id="50">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_0}
                onChange ={this.changeContent50}
                />
            </div>
            <div className="sectionFourBottom" id="51">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_1}
                onChange ={this.changeContent51}
                />
            </div>
            <div className="sectionFourBottomRight" id="52">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_2}
                onChange ={this.changeContent52}
                />
            </div>
            <div className="sectionFiveBottomLeft" id="53">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_53_cell_53}
                onChange ={this.changeContent53}
                />
            </div>
            <div className="sectionFiveBottom" id="54">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_4}
                onChange ={this.changeContent54}
                />
            </div>
            <div className="sectionFiveBottomRight" id="55">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_5}
                onChange ={this.changeContent55}
                />
            </div>
            <div className="sectionSixBottomLeft" id="56">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_6}
                onChange ={this.changeContent56}
                />
            </div>
            <div className="sectionSixBottom" id="57">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_7}
                onChange ={this.changeContent57}
                />
            </div>
            <div className="sectionSixBottomRight" id="58">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_5_cell_8}
                onChange ={this.changeContent58}
                />
            </div>
          </div>
          <div className="row">
            <div className="sectionSevenTopLeft" id="60">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_0}
                onChange ={this.changeContent60}
                />
            </div>
            <div className="sectionSevenTop" id="61">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_1}
                onChange ={this.changeContent61}
                />
            </div>
            <div className="sectionSevenTopRight" id="62">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_2}
                onChange ={this.changeContent62}
                />
            </div>
            <div className="sectionEightTopLeft" id="63">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_3}
                onChange ={this.changeContent63}
                />
            </div>
            <div className="sectionEightTop" id="64">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_4}
                onChange ={this.changeContent64}
                />
            </div>
            <div className="sectionEightTopRight" id="65">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_5}
                onChange ={this.changeContent65}
                />
            </div>
            <div className="sectionNineTopLeft" id="66">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_6_cell_6"
                value = {this.state.row_6_cell_6}
                onChange ={this.changeContent66}
                />
            </div>
            <div className="sectionNineTop" id="67">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_7}
                onChange ={this.changeContent67}
                />
            </div>
            <div className="sectionNineTopRight" id="68">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_6_cell_8}
                onChange ={this.changeContent68}
                />
            </div>
          </div>
          <div className="row">
            <div className="sectionSevenLeft" id="70">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_0}
                onChange ={this.changeContent70}
                />
            </div>
            <div className="cell" id="71">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_1}
                onChange ={this.changeContent71}
                />
            </div>
            <div className="sectionSevenRight" id="72">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_2}
                onChange ={this.changeContent72}
                />
            </div>
            <div className="sectionEightLeft" id="73">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_3}
                onChange ={this.changeContent73}
                />
            </div>
            <div className="cell" id="74">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_4}
                onChange ={this.changeContent74}
                />
            </div>
            <div className="sectionEightRight" id="75">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_5}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="sectionNineLeft" id="76">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_6}
                onChange ={this.changeContent76}
                />
            </div>
            <div className="cell" id="77">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_7}
                onChange ={this.changeContent77}
                />
            </div>
            <div className="sectionNineRight" id="78">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_7_cell_8}
                onChange ={this.changeContent78}
                />
            </div>
          </div>
          <div className="row">
            <div className="sectionSevenBottomLeft" id="80">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_0}
                onChange ={this.changeContent80}
                />
            </div>
            <div className="sectionSevenBottom" id="81">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_1}
                onChange ={this.changeContent81}
                />
            </div>
            <div className="sectionSevenBottomRight" id="82">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_2}
                onChange ={this.changeContent82}
                />
            </div>
            <div className="sectionEightBottomLeft" id="83">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_3}
                onChange ={this.changeContent83}
                />
            </div>
            <div className="sectionEightBottom" id="84">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_4}
                onChange ={this.changeContent84}
                />
            </div>
            <div className="sectionEightBottomRight" id="85">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_5}
                onChange ={this.changeContent85}
                />
            </div>
            <div className="sectionNineBottomLeft" id="86">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_6}
                onChange ={this.changeContent86}
                />
            </div>
            <div className="sectionNineBottom" id="87">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_7}
                onChange ={this.changeContent87}
                />
            </div>
            <div className="sectionNineBottomRight" id="88">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_8_cell_8}
                onChange ={this.changeContent88}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
