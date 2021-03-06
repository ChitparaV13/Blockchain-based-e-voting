import React, { Component } from "react";
import profile from "../../../assets/151713187001792.jpg";
export default class CandidateCard extends Component {
	
 vote = async()=> {
    const { accounts, contract, id, state} = this.props;

    // // candidates arrays.
    await contract.methods.voteForPresident(id, 0).send({ from: accounts[0] });
    // // Get the value from the contract to prove it worked.
    const response = await contract.methods.getPresidentialVoteCount(id, 0).call();

    const count = await contract.methods.getPresidentialCount().call();
    for (var i = 1; i <= count; i++) {
      const response = await contract.methods
        .getPresidentialCandidates(0, i)
        .call();
    //   this.setState(state => {
    //     const Presidential = state.Presidential.concat(response);
    //     return {
    //       Presidential
    //     };
	//   });
	
     }
//this.props.history.push('/client/president')
    console.log(response);
  };
  render() {
   console.log(this.props.profile)
   
    return (
      <div>
        <div className="col-lg-4">
          <span id="comment474877446628"></span>

          <div className="text-center card-box">
            <div className="clearfix"></div>
            <div className="member-card">
              <div className="thumb-xl member-thumb m-b-10 center-block ">
              <div className="container">
                <img
                width={283}
                height={283}
                  src={this.props.profile[0].profileImg}
                  className="img-circle img-responsive img-fluid img-thumbnail  rounded-circle " 
                  alt="profile-image"
                />
                </div>
                <i
                  className="mdi mdi-star-circle member-star text-success"
                  title="verified user"
                ></i>
              </div>

              <div className="">
                <h4 className="m-b-5">{this.props.name}</h4>
                <p className="text-danger">
                  <i className="fa fa-thumbs-o-up"></i> {this.props.count}
                </p>
                <p className="text-mint">
                  <span className="text-mint"> {this.props.party}</span>
                </p>
                <p>
                  {" "}
                  <span>
                    <span className="text-muted">Running to Be: </span>
                    <span className="text-mint">President</span>{" "}
                  </span>
                </p>
              </div>

              <p>
                <span
                  style={{
                    fontFamily: "&quot;Abhaya Libre&quot, serif",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontWeight: "400",
                    textAlign: "center"
                  }}
                >
                  {this.props.manifesto}
                </span>
              </p>
              <br />
              <a href="" className="kafe-btn kafe-btn-mint-small">
                <i className="fa fa-user-secret" aria-hidden="true"></i> View
                Manifesto
              </a>
              <button
			  type="button"
				className="kafe-btn kafe-btn-danger-small"
				
                onClick={this.vote}
              >
                <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> vote
              </button> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
