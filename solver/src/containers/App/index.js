import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import stringify from 'jsx-stringify';
import logo from './logo.svg';
import './styles.css';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      row_0_cell_0 : 0,
      row_0_cell_1 : 0,
      row_0_cell_2 : 0,
      row_0_cell_3 : 0,
      row_0_cell_4 : 0,
      row_0_cell_5 : 0,
      row_0_cell_6 : 0,
      row_0_cell_7 : 0,
      row_0_cell_8 : 0,
      row_1_cell_0 : 0,
      row_1_cell_1 : 0,
      row_1_cell_2 : 0,
      row_1_cell_3 : 0,
      row_1_cell_4 : 0,
      row_1_cell_5 : 0,
      row_1_cell_6 : 0,
      row_1_cell_7 : 0,
      row_1_cell_8 : 0,
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
            <div className="cell" id="20">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="21">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="22">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="23">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="24">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="25">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="26">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="27">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="28">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
          </div>
          <div className="row">
            <div className="cell" id="30">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="31">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="32">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="33">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="34">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="35">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="36">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="37">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="38">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
          </div>
          <div className="row">
            <div className="cell" id="40">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="41">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="42">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="43">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="44">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="45">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="46">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="47">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="48">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
          </div>
          <div className="row">
            <div className="cell" id="50">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="51">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="52">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="53">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="54">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="55">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="56">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="57">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="58">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
          </div>
          <div className="row">
            <div className="cell" id="60">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="61">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="62">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="63">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="64">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="65">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="66">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="67">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="68">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
          </div>
          <div className="row">
            <div className="cell" id="70">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="71">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="72">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="73">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="74">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="75">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="76">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="77">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="78">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
          </div>
          <div className="row">
            <div className="cell" id="80">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="81">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="82">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="83">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="84">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="85">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="86">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="87">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
            <div className="cell" id="88">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                value = {this.state.row_0_cell_0}
                onChange ={this.changeContent00}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
