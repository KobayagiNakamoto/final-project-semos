import { Modal } from "react-bootstrap";

export function RecipeModal(props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-size"
    >
      <Modal.Header closeButton className="no-border p-4 pb-0">
        <Modal.Title id="contained-modal-title-vcenter" className="modal-title">
          Mac n Bacon (and cheese)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex p-4">
        <div className="modal-left-side">
          <img
            width="100%"
            height="200"
            src="https://source.unsplash.com/282x200/?food"
            alt="food"
            className="modal-image rounded"
          />
          <div className="d-flex align-items-center justify-content-between pt-3">
            <span className="modal-subtitle">Best Served For</span>
            <span className="badge rounded-pill modal-pill-bg-color">
              lunch
            </span>
          </div>
          <div className="pt-3 text-muted fs-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English.
          </div>
          <div className="d-flex align-items-center pt-3">
            <div>
              <span className="me-3" style={{ fontSize: "0.8rem" }}>
                🕒 45 min
              </span>
              <span className="me-3" style={{ fontSize: "0.8rem" }}>
                🍽️ 4 persons
              </span>
              <span className="me-3" style={{ fontSize: "0.8rem" }}>
                ⭐ 28
              </span>
            </div>
          </div>
        </div>
        <div className="modal-right-side">
          <div className="modal-subtitle">Recipe Details</div>
          <div className="pt-3 text-muted fs-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. <br />
            <br /> Quisque blandit mattis risus, sed tincidunt ante finibus non.
            Nullam sit amet nunc lorem. Mauris lectus erat, accumsan quis nisl
            vel, feugiat rhoncus ipsum. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. In at euismod leo.{" "}
            <br />
            <br />
            Fusce sed volutpat risus, fermentum feugiat enim. Etiam mollis ante
            quis nisl imperdiet, id commodo ante tincidunt. <br />
            <br /> Duis bibendum scelerisque risus nec consectetur. Vivamus est
            elit, mollis vel malesuada non, porta id mauris. <br />
            <br /> Quisque a vehicula lorem. Praesent in auctor quam. Etiam
            magna quam, sollicitudin id nunc eget, porttitor pretium tellus.
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
