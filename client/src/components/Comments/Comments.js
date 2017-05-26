import React from "react";

const ListComments = (props) => {
  console.log("props=",props);
  return(
    <div>
      <div>
        <form className="form-inline">
          <div className="form-group">
            <label> Have a comment?: </label>
            <input type="text"
                   required="true"
                   value={props.text || ""}
                   className="form-control"
                   onChange={(event) => props.updateText(event)}/>
            <button type="button"
                    className="btn btn-primary"
                    onClick={(event) => props.submitComment(event)}>Add</button>
          </div>
        </form>
      </div>
    <div>
      <h3> Comments for this article: </h3>
    </div>

      <div>
        {props.comments.length > 0 ? props.comments.map((item,index) => (
          <div key={index}>
            <p> {item.comment} </p>
          </div>
        )): <h1>No comments...yet.</h1>}
      </div>
    </div>
  )
}

export default ListComments;
