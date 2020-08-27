import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteBoard } from "../../actions/profile";

const Board = ({ board, deleteBoard }) => {
  const boards = board.map((board) => (
    <div key={board.id}>
      <h2>{board.title}</h2>
      <p>{board.description}</p>
      <button onClick={() => deleteBoard(board.id)}>Delete</button>
    </div>
  ));
  return (
    <Fragment>
      <h2>Boards</h2>
      <ul>
        <li>{boards}</li>
      </ul>
    </Fragment>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};

export default connect(null, { deleteBoard })(Board);
