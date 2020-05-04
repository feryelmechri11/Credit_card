import React, { Component } from "react";
import pic from "../Components/BlueCard.png";

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rib: "",
      name: "",
      date: "",
      star: "****************",
    };
  }

  cardState = (e) => {
    this.setState({
      rib: this.state.rib,
      name: this.state.name,
      date: this.state.date,
    });
  };
  ribEncodage = (r) => {
    let ribe = r.target.value;
    // séparation des chiffres| étoiles par un espace
    let tab = this.state.star.match(/.{4}/g);

    console.log(tab);
    if (tab !== null) {
      tab = tab.join(" ");
      this.setState({ star2: tab });
    }

    this.setState({ rib: ribe });

    let regR = /[0-9]+$/;

    if (regR.test(ribe) && ribe.length <= 16) {
      this.setState({ rib: ribe });
    } else {
      alert("You must enter 16 number!");
      ribe = ribe.substr(0, 16);
    }

    // remplacement des *** par les chiffres entrés

    let stars = "****************".split("");
    stars.unshift(ribe);
    for (let i = 0; i < ribe.length; i++) {
      stars.pop();
    }
    this.setState({ star: stars.join(""), rib: ribe });
  };

  nameControle = (e) => {
    let namec = e.target.value;
    let reg = /^[a-z]{0,16}$/gi;
    if (reg.test(namec)) {
      this.setState({ name: namec });
    } else {
      alert("you must enter your name");
    }
    if (namec.length > 0) {
      this.setState({
        name: namec.toUpperCase(),
      });
    }
  };

  //function controle date : séparation chaque deux chiffres par slach automatiquement.
  dateControle = (e) => {
    let dateE = e.target.value;
    let date = this.state.date;

    let dateEm = dateE.substr(0, 2);
    let dateEy = dateE.substr(2, 4);

    if (dateE.length > 3) {
      let regexMOnthCondition1 = /^0[1-9]$/g;
      let regexMOnthCondition2 = /^1[0-2]$/g;
      let regexYear = /^2[0-5]$/g;

      if (
        regexMOnthCondition1.test(dateEm) ||
        regexMOnthCondition2.test(dateEm)
      ) {
        if (regexYear.test(dateEy)) {
          dateE = dateEm + "/" + dateEy;
        } else {
          alert("enter el 3am ");
          dateE = "";
        }
      } else {
        alert("dakhel el chhar rak ta3ebtnii ");
        dateE = "";
      }
    }
    console.log(dateEm);
    console.log(dateEy);
    this.setState({ date: dateE });
  };
  render() {
    return (
      <div className="credit_card">
        <h1> Credit Card Details </h1>
        <div className="dab">
          <div className="data">
            <div className="labelUser">
              <label cl> Card Number </label>
              <br />
              <label> Name </label>
              <br />
              <label> Valid Date </label>
              <br />
            </div>
            <div className="dataInputUser">
              <input
                type="text"
                id="rib"
                placeholder="RIB"
                value={this.state.rib}
                onChange={this.ribEncodage}
              />

              <br />
              <input
                type="text"
                id="name"
                placeholder="Your name "
                value={this.state.name}
                onChange={this.nameControle}
              />
              <br />
              <input
                type="number"
                id="date"
                placeholder="Date"
                value={this.state.date}
                onChange={this.dateControle}
              />
              <br />
            </div>
          </div>
          <div className="card">
            <h2 className="rib">{this.state.star2} </h2>

            <h3 className="name">{this.state.name} </h3>

            <h3 className="date ">{this.state.date} </h3>
          </div>
        </div>
      </div>
    );
  }
}
export default CreditCard;
