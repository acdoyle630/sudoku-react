import React, { Component } from 'react';
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
    };
  }

  changeContent = (event) => {
    let selectedCell;
    let cellTarget = event.target
    console.log(cellTarget)
    console.log(typeof cellTarget)

  }
  render() {
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
            <div className="cell" id="row_0_cell_0">
              <input
                type = "number"
                min = "1"
                max = "9"
                cell = "row_0_cell_0"
                onChange ={this.changeContent}
                />
            </div>
            <div className="cell" id="01">
              [0,1]
            </div>
            <div className="cell" id="02">
              [0,2]
            </div>
            <div className="cell" id="03">
              [0,3]
            </div>
            <div className="cell" id="04">
              [0,4]
            </div>
            <div className="cell" id="05">
              [0,5]
            </div>
            <div className="cell" id="06">
              [0,6]
            </div>
            <div className="cell" id="07">
              [0,7]
            </div>
            <div className="cell" id="08">
              [0,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="10">
              [1,0]
            </div>
            <div className="cell" id="11">
              [1,1]
            </div>
            <div className="cell" id="12">
              [1,2]
            </div>
            <div className="cell" id="13">
              [1,3]
            </div>
            <div className="cell" id="14">
              [1,4]
            </div>
            <div className="cell" id="15">
              [1,5]
            </div>
            <div className="cell" id="16">
              [1,6]
            </div>
            <div className="cell" id="17">
              [1,7]
            </div>
            <div className="cell" id="18">
              [1,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="20">
              [2,0]
            </div>
            <div className="cell" id="21">
              [2,1]
            </div>
            <div className="cell" id="22">
              [2,2]
            </div>
            <div className="cell" id="23">
              [2,3]
            </div>
            <div className="cell" id="24">
              [2,4]
            </div>
            <div className="cell" id="25">
              [2,5]
            </div>
            <div className="cell" id="26">
              [2,6]
            </div>
            <div className="cell" id="27">
              [2,7]
            </div>
            <div className="cell" id="28">
              [2,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="30">
              [3,0]
            </div>
            <div className="cell" id="31">
              [3,1]
            </div>
            <div className="cell" id="32">
              [3,2]
            </div>
            <div className="cell" id="33">
              [3,3]
            </div>
            <div className="cell" id="34">
              [3,4]
            </div>
            <div className="cell" id="35">
              [3,5]
            </div>
            <div className="cell" id="36">
              [3,6]
            </div>
            <div className="cell" id="37">
              [3,7]
            </div>
            <div className="cell" id="38">
              [3,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="40">
              [4,0]
            </div>
            <div className="cell" id="41">
              [4,1]
            </div>
            <div className="cell" id="42">
              [4,2]
            </div>
            <div className="cell" id="43">
              [4,3]
            </div>
            <div className="cell" id="44">
              [4,4]
            </div>
            <div className="cell" id="45">
              [4,5]
            </div>
            <div className="cell" id="46">
              [4,6]
            </div>
            <div className="cell" id="47">
              [4,7]
            </div>
            <div className="cell" id="48">
              [4,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="50">
              [5,0]
            </div>
            <div className="cell" id="51">
              [5,1]
            </div>
            <div className="cell" id="52">
              [5,2]
            </div>
            <div className="cell" id="53">
              [5,3]
            </div>
            <div className="cell" id="54">
              [5,4]
            </div>
            <div className="cell" id="55">
              [5,5]
            </div>
            <div className="cell" id="56">
              [5,6]
            </div>
            <div className="cell" id="57">
              [5,7]
            </div>
            <div className="cell" id="58">
              [5,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="60">
              [6,0]
            </div>
            <div className="cell" id="61">
              [6,1]
            </div>
            <div className="cell" id="62">
              [6,2]
            </div>
            <div className="cell" id="63">
              [6,3]
            </div>
            <div className="cell" id="64">
              [6,4]
            </div>
            <div className="cell" id="65">
              [6,5]
            </div>
            <div className="cell" id="66">
              [6,6]
            </div>
            <div className="cell" id="67">
              [6,7]
            </div>
            <div className="cell" id="68">
              [6,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="70">
              [7,0]
            </div>
            <div className="cell" id="71">
              [7,1]
            </div>
            <div className="cell" id="72">
              [7,2]
            </div>
            <div className="cell" id="73">
              [7,3]
            </div>
            <div className="cell" id="74">
              [7,4]
            </div>
            <div className="cell" id="75">
              [7,5]
            </div>
            <div className="cell" id="76">
              [7,6]
            </div>
            <div className="cell" id="77">
              [7,7]
            </div>
            <div className="cell" id="78">
              [7,8]
            </div>
          </div>
          <div className="row">
            <div className="cell" id="80">
              [8,0]
            </div>
            <div className="cell" id="81">
              [8,1]
            </div>
            <div className="cell" id="82">
              [8,2]
            </div>
            <div className="cell" id="83">
              [8,3]
            </div>
            <div className="cell" id="84">
              [8,4]
            </div>
            <div className="cell" id="85">
              [8,5]
            </div>
            <div className="cell" id="86">
              [8,6]
            </div>
            <div className="cell" id="87">
              [8,7]
            </div>
            <div className="cell" id="88">
              [8,8]
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
